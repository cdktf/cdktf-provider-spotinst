# `spotinst_ocean_aks`

Refer to the Terraform Registory for docs: [`spotinst_ocean_aks`](https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks).

# `oceanAks` Submodule <a name="`oceanAks` Submodule" id="@cdktf/provider-spotinst.oceanAks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAks <a name="OceanAks" id="@cdktf/provider-spotinst.oceanAks.OceanAks"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks spotinst_ocean_aks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAks(scope Construct, id *string, config OceanAksConfig) OceanAks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig">OceanAksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig">OceanAksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putAutoscaler">PutAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putExtension">PutExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putHealth">PutHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putManagedServiceIdentity">PutManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putVmSizes">PutVmSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetAutoscaler">ResetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetControllerClusterId">ResetControllerClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetHealth">ResetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetManagedServiceIdentity">ResetManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetMaxPods">ResetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetOsDisk">ResetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetVmSizes">ResetVmSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAks.OceanAks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAks.OceanAks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAks.OceanAks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAks.OceanAks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoscaler` <a name="PutAutoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putAutoscaler"></a>

```go
func PutAutoscaler(value OceanAksAutoscaler)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

---

##### `PutExtension` <a name="PutExtension" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putExtension"></a>

```go
func PutExtension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putExtension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHealth` <a name="PutHealth" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putHealth"></a>

```go
func PutHealth(value OceanAksHealth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putImage"></a>

```go
func PutImage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putImage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putLoadBalancer"></a>

```go
func PutLoadBalancer(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putLoadBalancer.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedServiceIdentity` <a name="PutManagedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putManagedServiceIdentity"></a>

```go
func PutManagedServiceIdentity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putManagedServiceIdentity.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putNetwork"></a>

```go
func PutNetwork(value OceanAksNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

---

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putOsDisk"></a>

```go
func PutOsDisk(value OceanAksOsDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putStrategy"></a>

```go
func PutStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVmSizes` <a name="PutVmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putVmSizes"></a>

```go
func PutVmSizes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putVmSizes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoscaler` <a name="ResetAutoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetAutoscaler"></a>

```go
func ResetAutoscaler()
```

##### `ResetControllerClusterId` <a name="ResetControllerClusterId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetControllerClusterId"></a>

```go
func ResetControllerClusterId()
```

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetCustomData"></a>

```go
func ResetCustomData()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetExtension"></a>

```go
func ResetExtension()
```

##### `ResetHealth` <a name="ResetHealth" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetHealth"></a>

```go
func ResetHealth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetId"></a>

```go
func ResetId()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetImage"></a>

```go
func ResetImage()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetLoadBalancer"></a>

```go
func ResetLoadBalancer()
```

##### `ResetManagedServiceIdentity` <a name="ResetManagedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetManagedServiceIdentity"></a>

```go
func ResetManagedServiceIdentity()
```

##### `ResetMaxPods` <a name="ResetMaxPods" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetMaxPods"></a>

```go
func ResetMaxPods()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOsDisk` <a name="ResetOsDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetOsDisk"></a>

```go
func ResetOsDisk()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetStrategy"></a>

```go
func ResetStrategy()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetTag"></a>

```go
func ResetTag()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetUserName"></a>

```go
func ResetUserName()
```

##### `ResetVmSizes` <a name="ResetVmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetVmSizes"></a>

```go
func ResetVmSizes()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetZones"></a>

```go
func ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.OceanAks_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.OceanAks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.OceanAks_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference">OceanAksAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.extension">Extension</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList">OceanAksExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference">OceanAksHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.image">Image</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList">OceanAksImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList">OceanAksLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.managedServiceIdentity">ManagedServiceIdentity</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList">OceanAksManagedServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference">OceanAksNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference">OceanAksOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList">OceanAksStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList">OceanAksTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.vmSizes">VmSizes</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList">OceanAksVmSizesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.acdIdentifierInput">AcdIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksNameInput">AksNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksResourceGroupNameInput">AksResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.autoscalerInput">AutoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.controllerClusterIdInput">ControllerClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.customDataInput">CustomDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.extensionInput">ExtensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.healthInput">HealthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.imageInput">ImageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.managedServiceIdentityInput">ManagedServiceIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.maxPodsInput">MaxPodsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.strategyInput">StrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.vmSizesInput">VmSizesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.acdIdentifier">AcdIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksName">AksName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksResourceGroupName">AksResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.controllerClusterId">ControllerClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.customData">CustomData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.maxPods">MaxPods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscaler`<sup>Required</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.autoscaler"></a>

```go
func Autoscaler() OceanAksAutoscalerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference">OceanAksAutoscalerOutputReference</a>

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.extension"></a>

```go
func Extension() OceanAksExtensionList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList">OceanAksExtensionList</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.health"></a>

```go
func Health() OceanAksHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference">OceanAksHealthOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.image"></a>

```go
func Image() OceanAksImageList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList">OceanAksImageList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.loadBalancer"></a>

```go
func LoadBalancer() OceanAksLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList">OceanAksLoadBalancerList</a>

---

##### `ManagedServiceIdentity`<sup>Required</sup> <a name="ManagedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.managedServiceIdentity"></a>

```go
func ManagedServiceIdentity() OceanAksManagedServiceIdentityList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList">OceanAksManagedServiceIdentityList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.network"></a>

```go
func Network() OceanAksNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference">OceanAksNetworkOutputReference</a>

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.osDisk"></a>

```go
func OsDisk() OceanAksOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference">OceanAksOsDiskOutputReference</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.strategy"></a>

```go
func Strategy() OceanAksStrategyList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList">OceanAksStrategyList</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.tag"></a>

```go
func Tag() OceanAksTagList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList">OceanAksTagList</a>

---

##### `VmSizes`<sup>Required</sup> <a name="VmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.vmSizes"></a>

```go
func VmSizes() OceanAksVmSizesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList">OceanAksVmSizesList</a>

---

##### `AcdIdentifierInput`<sup>Optional</sup> <a name="AcdIdentifierInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.acdIdentifierInput"></a>

```go
func AcdIdentifierInput() *string
```

- *Type:* *string

---

##### `AksNameInput`<sup>Optional</sup> <a name="AksNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksNameInput"></a>

```go
func AksNameInput() *string
```

- *Type:* *string

---

##### `AksResourceGroupNameInput`<sup>Optional</sup> <a name="AksResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksResourceGroupNameInput"></a>

```go
func AksResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `AutoscalerInput`<sup>Optional</sup> <a name="AutoscalerInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.autoscalerInput"></a>

```go
func AutoscalerInput() OceanAksAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

---

##### `ControllerClusterIdInput`<sup>Optional</sup> <a name="ControllerClusterIdInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.controllerClusterIdInput"></a>

```go
func ControllerClusterIdInput() *string
```

- *Type:* *string

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.customDataInput"></a>

```go
func CustomDataInput() *string
```

- *Type:* *string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.extensionInput"></a>

```go
func ExtensionInput() interface{}
```

- *Type:* interface{}

---

##### `HealthInput`<sup>Optional</sup> <a name="HealthInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.healthInput"></a>

```go
func HealthInput() OceanAksHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.imageInput"></a>

```go
func ImageInput() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedServiceIdentityInput`<sup>Optional</sup> <a name="ManagedServiceIdentityInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.managedServiceIdentityInput"></a>

```go
func ManagedServiceIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `MaxPodsInput`<sup>Optional</sup> <a name="MaxPodsInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.maxPodsInput"></a>

```go
func MaxPodsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.networkInput"></a>

```go
func NetworkInput() OceanAksNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.osDiskInput"></a>

```go
func OsDiskInput() OceanAksOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.sshPublicKeyInput"></a>

```go
func SshPublicKeyInput() *string
```

- *Type:* *string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.strategyInput"></a>

```go
func StrategyInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `VmSizesInput`<sup>Optional</sup> <a name="VmSizesInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.vmSizesInput"></a>

```go
func VmSizesInput() interface{}
```

- *Type:* interface{}

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AcdIdentifier`<sup>Required</sup> <a name="AcdIdentifier" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.acdIdentifier"></a>

```go
func AcdIdentifier() *string
```

- *Type:* *string

---

##### `AksName`<sup>Required</sup> <a name="AksName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksName"></a>

```go
func AksName() *string
```

- *Type:* *string

---

##### `AksResourceGroupName`<sup>Required</sup> <a name="AksResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksResourceGroupName"></a>

```go
func AksResourceGroupName() *string
```

- *Type:* *string

---

##### `ControllerClusterId`<sup>Required</sup> <a name="ControllerClusterId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.controllerClusterId"></a>

```go
func ControllerClusterId() *string
```

- *Type:* *string

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.customData"></a>

```go
func CustomData() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxPods`<sup>Required</sup> <a name="MaxPods" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.maxPods"></a>

```go
func MaxPods() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksAutoscaler <a name="OceanAksAutoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksAutoscaler {
	AutoscaleDown: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown,
	AutoscaleHeadroom: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom,
	AutoscaleIsEnabled: interface{},
	ResourceLimits: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksAutoscalerResourceLimits,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#autoscale_is_enabled OceanAks#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `AutoscaleDown`<sup>Optional</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleDown"></a>

```go
AutoscaleDown OceanAksAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#autoscale_down OceanAks#autoscale_down}

---

##### `AutoscaleHeadroom`<sup>Optional</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleHeadroom"></a>

```go
AutoscaleHeadroom OceanAksAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#autoscale_headroom OceanAks#autoscale_headroom}

---

##### `AutoscaleIsEnabled`<sup>Optional</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleIsEnabled"></a>

```go
AutoscaleIsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#autoscale_is_enabled OceanAks#autoscale_is_enabled}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.resourceLimits"></a>

```go
ResourceLimits OceanAksAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_limits OceanAks#resource_limits}

---

### OceanAksAutoscalerAutoscaleDown <a name="OceanAksAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksAutoscalerAutoscaleDown {
	MaxScaleDownPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#max_scale_down_percentage OceanAks#max_scale_down_percentage}. |

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```go
MaxScaleDownPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#max_scale_down_percentage OceanAks#max_scale_down_percentage}.

---

### OceanAksAutoscalerAutoscaleHeadroom <a name="OceanAksAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksAutoscalerAutoscaleHeadroom {
	Automatic: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a></code> | automatic block. |

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom.property.automatic"></a>

```go
Automatic OceanAksAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#automatic OceanAks#automatic}

---

### OceanAksAutoscalerAutoscaleHeadroomAutomatic <a name="OceanAksAutoscalerAutoscaleHeadroomAutomatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksAutoscalerAutoscaleHeadroomAutomatic {
	IsEnabled: interface{},
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#is_enabled OceanAks#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.property.percentage">Percentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#percentage OceanAks#percentage}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#is_enabled OceanAks#is_enabled}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#percentage OceanAks#percentage}.

---

### OceanAksAutoscalerResourceLimits <a name="OceanAksAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksAutoscalerResourceLimits {
	MaxMemoryGib: *f64,
	MaxVcpu: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#max_memory_gib OceanAks#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#max_vcpu OceanAks#max_vcpu}. |

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.property.maxMemoryGib"></a>

```go
MaxMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#max_memory_gib OceanAks#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.property.maxVcpu"></a>

```go
MaxVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#max_vcpu OceanAks#max_vcpu}.

---

### OceanAksConfig <a name="OceanAksConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AcdIdentifier: *string,
	AksName: *string,
	AksResourceGroupName: *string,
	Name: *string,
	SshPublicKey: *string,
	Autoscaler: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksAutoscaler,
	ControllerClusterId: *string,
	CustomData: *string,
	Extension: interface{},
	Health: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksHealth,
	Id: *string,
	Image: interface{},
	LoadBalancer: interface{},
	ManagedServiceIdentity: interface{},
	MaxPods: *f64,
	Network: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksNetwork,
	OsDisk: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksOsDisk,
	ResourceGroupName: *string,
	Strategy: interface{},
	Tag: interface{},
	UserName: *string,
	VmSizes: interface{},
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.acdIdentifier">AcdIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#acd_identifier OceanAks#acd_identifier}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.aksName">AksName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#aks_name OceanAks#aks_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.aksResourceGroupName">AksResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#aks_resource_group_name OceanAks#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#ssh_public_key OceanAks#ssh_public_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.controllerClusterId">ControllerClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#controller_cluster_id OceanAks#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.customData">CustomData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#custom_data OceanAks#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.extension">Extension</a></code> | <code>interface{}</code> | extension block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#id OceanAks#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.image">Image</a></code> | <code>interface{}</code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.loadBalancer">LoadBalancer</a></code> | <code>interface{}</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.managedServiceIdentity">ManagedServiceIdentity</a></code> | <code>interface{}</code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.maxPods">MaxPods</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#max_pods OceanAks#max_pods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.strategy">Strategy</a></code> | <code>interface{}</code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#user_name OceanAks#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.vmSizes">VmSizes</a></code> | <code>interface{}</code> | vm_sizes block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#zones OceanAks#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcdIdentifier`<sup>Required</sup> <a name="AcdIdentifier" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.acdIdentifier"></a>

```go
AcdIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#acd_identifier OceanAks#acd_identifier}.

---

##### `AksName`<sup>Required</sup> <a name="AksName" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.aksName"></a>

```go
AksName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#aks_name OceanAks#aks_name}.

---

##### `AksResourceGroupName`<sup>Required</sup> <a name="AksResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.aksResourceGroupName"></a>

```go
AksResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#aks_resource_group_name OceanAks#aks_resource_group_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.sshPublicKey"></a>

```go
SshPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#ssh_public_key OceanAks#ssh_public_key}.

---

##### `Autoscaler`<sup>Optional</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.autoscaler"></a>

```go
Autoscaler OceanAksAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#autoscaler OceanAks#autoscaler}

---

##### `ControllerClusterId`<sup>Optional</sup> <a name="ControllerClusterId" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.controllerClusterId"></a>

```go
ControllerClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#controller_cluster_id OceanAks#controller_cluster_id}.

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.customData"></a>

```go
CustomData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#custom_data OceanAks#custom_data}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.extension"></a>

```go
Extension interface{}
```

- *Type:* interface{}

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#extension OceanAks#extension}

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.health"></a>

```go
Health OceanAksHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#health OceanAks#health}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#id OceanAks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.image"></a>

```go
Image interface{}
```

- *Type:* interface{}

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#image OceanAks#image}

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.loadBalancer"></a>

```go
LoadBalancer interface{}
```

- *Type:* interface{}

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#load_balancer OceanAks#load_balancer}

---

##### `ManagedServiceIdentity`<sup>Optional</sup> <a name="ManagedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.managedServiceIdentity"></a>

```go
ManagedServiceIdentity interface{}
```

- *Type:* interface{}

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#managed_service_identity OceanAks#managed_service_identity}

---

##### `MaxPods`<sup>Optional</sup> <a name="MaxPods" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.maxPods"></a>

```go
MaxPods *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#max_pods OceanAks#max_pods}.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.network"></a>

```go
Network OceanAksNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#network OceanAks#network}

---

##### `OsDisk`<sup>Optional</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.osDisk"></a>

```go
OsDisk OceanAksOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#os_disk OceanAks#os_disk}

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.strategy"></a>

```go
Strategy interface{}
```

- *Type:* interface{}

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#strategy OceanAks#strategy}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#tag OceanAks#tag}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#user_name OceanAks#user_name}.

---

##### `VmSizes`<sup>Optional</sup> <a name="VmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.vmSizes"></a>

```go
VmSizes interface{}
```

- *Type:* interface{}

vm_sizes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#vm_sizes OceanAks#vm_sizes}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#zones OceanAks#zones}.

---

### OceanAksExtension <a name="OceanAksExtension" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksExtension {
	ApiVersion: *string,
	MinorVersionAutoUpgrade: interface{},
	Name: *string,
	Publisher: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#api_version OceanAks#api_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.minorVersionAutoUpgrade">MinorVersionAutoUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#minor_version_auto_upgrade OceanAks#minor_version_auto_upgrade}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#publisher OceanAks#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#type OceanAks#type}. |

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#api_version OceanAks#api_version}.

---

##### `MinorVersionAutoUpgrade`<sup>Optional</sup> <a name="MinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.minorVersionAutoUpgrade"></a>

```go
MinorVersionAutoUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#minor_version_auto_upgrade OceanAks#minor_version_auto_upgrade}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#publisher OceanAks#publisher}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#type OceanAks#type}.

---

### OceanAksHealth <a name="OceanAksHealth" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksHealth {
	GracePeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#grace_period OceanAks#grace_period}. |

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealth.property.gracePeriod"></a>

```go
GracePeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#grace_period OceanAks#grace_period}.

---

### OceanAksImage <a name="OceanAksImage" id="@cdktf/provider-spotinst.oceanAks.OceanAksImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksImage {
	Marketplace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage.property.marketplace">Marketplace</a></code> | <code>interface{}</code> | marketplace block. |

---

##### `Marketplace`<sup>Optional</sup> <a name="Marketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImage.property.marketplace"></a>

```go
Marketplace interface{}
```

- *Type:* interface{}

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#marketplace OceanAks#marketplace}

---

### OceanAksImageMarketplace <a name="OceanAksImageMarketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksImageMarketplace {
	Offer: *string,
	Publisher: *string,
	Sku: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#offer OceanAks#offer}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#publisher OceanAks#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#sku OceanAks#sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#version OceanAks#version}. |

---

##### `Offer`<sup>Optional</sup> <a name="Offer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#offer OceanAks#offer}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#publisher OceanAks#publisher}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#sku OceanAks#sku}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#version OceanAks#version}.

---

### OceanAksLoadBalancer <a name="OceanAksLoadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksLoadBalancer {
	BackendPoolNames: *[]*string,
	LoadBalancerSku: *string,
	Name: *string,
	ResourceGroupName: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.backendPoolNames">BackendPoolNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#backend_pool_names OceanAks#backend_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.loadBalancerSku">LoadBalancerSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#load_balancer_sku OceanAks#load_balancer_sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#type OceanAks#type}. |

---

##### `BackendPoolNames`<sup>Optional</sup> <a name="BackendPoolNames" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.backendPoolNames"></a>

```go
BackendPoolNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#backend_pool_names OceanAks#backend_pool_names}.

---

##### `LoadBalancerSku`<sup>Optional</sup> <a name="LoadBalancerSku" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.loadBalancerSku"></a>

```go
LoadBalancerSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#load_balancer_sku OceanAks#load_balancer_sku}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#type OceanAks#type}.

---

### OceanAksManagedServiceIdentity <a name="OceanAksManagedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksManagedServiceIdentity {
	Name: *string,
	ResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

### OceanAksNetwork <a name="OceanAksNetwork" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksNetwork {
	NetworkInterface: interface{},
	ResourceGroupName: *string,
	VirtualNetworkName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#virtual_network_name OceanAks#virtual_network_name}. |

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#network_interface OceanAks#network_interface}

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

##### `VirtualNetworkName`<sup>Optional</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.virtualNetworkName"></a>

```go
VirtualNetworkName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#virtual_network_name OceanAks#virtual_network_name}.

---

### OceanAksNetworkNetworkInterface <a name="OceanAksNetworkNetworkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksNetworkNetworkInterface {
	AdditionalIpConfig: interface{},
	AssignPublicIp: interface{},
	IsPrimary: interface{},
	SecurityGroup: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup,
	SubnetName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.additionalIpConfig">AdditionalIpConfig</a></code> | <code>interface{}</code> | additional_ip_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.assignPublicIp">AssignPublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#assign_public_ip OceanAks#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#is_primary OceanAks#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.securityGroup">SecurityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a></code> | security_group block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.subnetName">SubnetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#subnet_name OceanAks#subnet_name}. |

---

##### `AdditionalIpConfig`<sup>Optional</sup> <a name="AdditionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.additionalIpConfig"></a>

```go
AdditionalIpConfig interface{}
```

- *Type:* interface{}

additional_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#additional_ip_config OceanAks#additional_ip_config}

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.assignPublicIp"></a>

```go
AssignPublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#assign_public_ip OceanAks#assign_public_ip}.

---

##### `IsPrimary`<sup>Optional</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.isPrimary"></a>

```go
IsPrimary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#is_primary OceanAks#is_primary}.

---

##### `SecurityGroup`<sup>Optional</sup> <a name="SecurityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.securityGroup"></a>

```go
SecurityGroup OceanAksNetworkNetworkInterfaceSecurityGroup
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a>

security_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#security_group OceanAks#security_group}

---

##### `SubnetName`<sup>Optional</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.subnetName"></a>

```go
SubnetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#subnet_name OceanAks#subnet_name}.

---

### OceanAksNetworkNetworkInterfaceAdditionalIpConfig <a name="OceanAksNetworkNetworkInterfaceAdditionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig {
	Name: *string,
	PrivateIpVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.property.privateIpVersion">PrivateIpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#private_ip_version OceanAks#private_ip_version}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `PrivateIpVersion`<sup>Optional</sup> <a name="PrivateIpVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.property.privateIpVersion"></a>

```go
PrivateIpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#private_ip_version OceanAks#private_ip_version}.

---

### OceanAksNetworkNetworkInterfaceSecurityGroup <a name="OceanAksNetworkNetworkInterfaceSecurityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksNetworkNetworkInterfaceSecurityGroup {
	Name: *string,
	ResourceGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

### OceanAksOsDisk <a name="OceanAksOsDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksOsDisk {
	SizeGb: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#size_gb OceanAks#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#type OceanAks#type}. |

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#size_gb OceanAks#size_gb}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#type OceanAks#type}.

---

### OceanAksStrategy <a name="OceanAksStrategy" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksStrategy {
	FallbackToOndemand: interface{},
	SpotPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#fallback_to_ondemand OceanAks#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#spot_percentage OceanAks#spot_percentage}. |

---

##### `FallbackToOndemand`<sup>Optional</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.property.fallbackToOndemand"></a>

```go
FallbackToOndemand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#fallback_to_ondemand OceanAks#fallback_to_ondemand}.

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.property.spotPercentage"></a>

```go
SpotPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#spot_percentage OceanAks#spot_percentage}.

---

### OceanAksTag <a name="OceanAksTag" id="@cdktf/provider-spotinst.oceanAks.OceanAksTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksTag {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#key OceanAks#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#value OceanAks#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAks.OceanAksTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#key OceanAks#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAks.OceanAksTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#value OceanAks#value}.

---

### OceanAksVmSizes <a name="OceanAksVmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

&oceanaks.OceanAksVmSizes {
	Whitelist: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes.property.whitelist">Whitelist</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#whitelist OceanAks#whitelist}. |

---

##### `Whitelist`<sup>Optional</sup> <a name="Whitelist" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes.property.whitelist"></a>

```go
Whitelist *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.142.0/docs/resources/ocean_aks#whitelist OceanAks#whitelist}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksAutoscalerAutoscaleDownOutputReference <a name="OceanAksAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksAutoscalerAutoscaleDownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksAutoscalerAutoscaleDownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```go
func ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```go
func MaxScaleDownPercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```go
func MaxScaleDownPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a>

---


### OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference <a name="OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a>

---


### OceanAksAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAksAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksAutoscalerAutoscaleHeadroomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksAutoscalerAutoscaleHeadroomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.putAutomatic">PutAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomatic` <a name="PutAutomatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.putAutomatic"></a>

```go
func PutAutomatic(value OceanAksAutoscalerAutoscaleHeadroomAutomatic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic"></a>

```go
func ResetAutomatic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput">AutomaticInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.automatic"></a>

```go
func Automatic() OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput"></a>

```go
func AutomaticInput() OceanAksAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a>

---


### OceanAksAutoscalerOutputReference <a name="OceanAksAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksAutoscalerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksAutoscalerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleDown">PutAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleHeadroom">PutAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleDown">ResetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleHeadroom">ResetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleIsEnabled">ResetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaleDown` <a name="PutAutoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleDown"></a>

```go
func PutAutoscaleDown(value OceanAksAutoscalerAutoscaleDown)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a>

---

##### `PutAutoscaleHeadroom` <a name="PutAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```go
func PutAutoscaleHeadroom(value OceanAksAutoscalerAutoscaleHeadroom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a>

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putResourceLimits"></a>

```go
func PutResourceLimits(value OceanAksAutoscalerResourceLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a>

---

##### `ResetAutoscaleDown` <a name="ResetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleDown"></a>

```go
func ResetAutoscaleDown()
```

##### `ResetAutoscaleHeadroom` <a name="ResetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```go
func ResetAutoscaleHeadroom()
```

##### `ResetAutoscaleIsEnabled` <a name="ResetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```go
func ResetAutoscaleIsEnabled()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetResourceLimits"></a>

```go
func ResetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference">OceanAksAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference">OceanAksAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference">OceanAksAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleDownInput">AutoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleHeadroomInput">AutoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleIsEnabledInput">AutoscaleIsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscaleDown`<sup>Required</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleDown"></a>

```go
func AutoscaleDown() OceanAksAutoscalerAutoscaleDownOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference">OceanAksAutoscalerAutoscaleDownOutputReference</a>

---

##### `AutoscaleHeadroom`<sup>Required</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```go
func AutoscaleHeadroom() OceanAksAutoscalerAutoscaleHeadroomOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference">OceanAksAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.resourceLimits"></a>

```go
func ResourceLimits() OceanAksAutoscalerResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference">OceanAksAutoscalerResourceLimitsOutputReference</a>

---

##### `AutoscaleDownInput`<sup>Optional</sup> <a name="AutoscaleDownInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleDownInput"></a>

```go
func AutoscaleDownInput() OceanAksAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a>

---

##### `AutoscaleHeadroomInput`<sup>Optional</sup> <a name="AutoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```go
func AutoscaleHeadroomInput() OceanAksAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a>

---

##### `AutoscaleIsEnabledInput`<sup>Optional</sup> <a name="AutoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```go
func AutoscaleIsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.resourceLimitsInput"></a>

```go
func ResourceLimitsInput() OceanAksAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a>

---

##### `AutoscaleIsEnabled`<sup>Required</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```go
func AutoscaleIsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

---


### OceanAksAutoscalerResourceLimitsOutputReference <a name="OceanAksAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksAutoscalerResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksAutoscalerResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```go
func ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```go
func ResetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```go
func MaxMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```go
func MaxVcpuInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```go
func MaxMemoryGib() *f64
```

- *Type:* *f64

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```go
func MaxVcpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a>

---


### OceanAksExtensionList <a name="OceanAksExtensionList" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksExtensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksExtensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.get"></a>

```go
func Get(index *f64) OceanAksExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksExtensionOutputReference <a name="OceanAksExtensionOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetApiVersion">ResetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetMinorVersionAutoUpgrade">ResetMinorVersionAutoUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetApiVersion"></a>

```go
func ResetApiVersion()
```

##### `ResetMinorVersionAutoUpgrade` <a name="ResetMinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetMinorVersionAutoUpgrade"></a>

```go
func ResetMinorVersionAutoUpgrade()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetPublisher"></a>

```go
func ResetPublisher()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.minorVersionAutoUpgradeInput">MinorVersionAutoUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.minorVersionAutoUpgrade">MinorVersionAutoUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.apiVersionInput"></a>

```go
func ApiVersionInput() *string
```

- *Type:* *string

---

##### `MinorVersionAutoUpgradeInput`<sup>Optional</sup> <a name="MinorVersionAutoUpgradeInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.minorVersionAutoUpgradeInput"></a>

```go
func MinorVersionAutoUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `MinorVersionAutoUpgrade`<sup>Required</sup> <a name="MinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.minorVersionAutoUpgrade"></a>

```go
func MinorVersionAutoUpgrade() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksHealthOutputReference <a name="OceanAksHealthOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksHealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksHealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *f64
```

- *Type:* *f64

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.gracePeriod"></a>

```go
func GracePeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

---


### OceanAksImageList <a name="OceanAksImageList" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksImageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksImageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.get"></a>

```go
func Get(index *f64) OceanAksImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksImageMarketplaceList <a name="OceanAksImageMarketplaceList" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksImageMarketplaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksImageMarketplaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.get"></a>

```go
func Get(index *f64) OceanAksImageMarketplaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksImageMarketplaceOutputReference <a name="OceanAksImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksImageMarketplaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksImageMarketplaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetOffer">ResetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffer` <a name="ResetOffer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetOffer"></a>

```go
func ResetOffer()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetPublisher"></a>

```go
func ResetPublisher()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetSku"></a>

```go
func ResetSku()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksImageOutputReference <a name="OceanAksImageOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.putMarketplace">PutMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resetMarketplace">ResetMarketplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMarketplace` <a name="PutMarketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.putMarketplace"></a>

```go
func PutMarketplace(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMarketplace` <a name="ResetMarketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resetMarketplace"></a>

```go
func ResetMarketplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.marketplace">Marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList">OceanAksImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.marketplaceInput">MarketplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Marketplace`<sup>Required</sup> <a name="Marketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.marketplace"></a>

```go
func Marketplace() OceanAksImageMarketplaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList">OceanAksImageMarketplaceList</a>

---

##### `MarketplaceInput`<sup>Optional</sup> <a name="MarketplaceInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.marketplaceInput"></a>

```go
func MarketplaceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksLoadBalancerList <a name="OceanAksLoadBalancerList" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksLoadBalancerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksLoadBalancerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.get"></a>

```go
func Get(index *f64) OceanAksLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksLoadBalancerOutputReference <a name="OceanAksLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetBackendPoolNames">ResetBackendPoolNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetLoadBalancerSku">ResetLoadBalancerSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPoolNames` <a name="ResetBackendPoolNames" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetBackendPoolNames"></a>

```go
func ResetBackendPoolNames()
```

##### `ResetLoadBalancerSku` <a name="ResetLoadBalancerSku" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetLoadBalancerSku"></a>

```go
func ResetLoadBalancerSku()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.backendPoolNamesInput">BackendPoolNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.loadBalancerSkuInput">LoadBalancerSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.backendPoolNames">BackendPoolNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.loadBalancerSku">LoadBalancerSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPoolNamesInput`<sup>Optional</sup> <a name="BackendPoolNamesInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.backendPoolNamesInput"></a>

```go
func BackendPoolNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerSkuInput`<sup>Optional</sup> <a name="LoadBalancerSkuInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.loadBalancerSkuInput"></a>

```go
func LoadBalancerSkuInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `BackendPoolNames`<sup>Required</sup> <a name="BackendPoolNames" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.backendPoolNames"></a>

```go
func BackendPoolNames() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerSku`<sup>Required</sup> <a name="LoadBalancerSku" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.loadBalancerSku"></a>

```go
func LoadBalancerSku() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksManagedServiceIdentityList <a name="OceanAksManagedServiceIdentityList" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksManagedServiceIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksManagedServiceIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.get"></a>

```go
func Get(index *f64) OceanAksManagedServiceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksManagedServiceIdentityOutputReference <a name="OceanAksManagedServiceIdentityOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksManagedServiceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksManagedServiceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNetworkNetworkInterfaceAdditionalIpConfigList <a name="OceanAksNetworkNetworkInterfaceAdditionalIpConfigList" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksNetworkNetworkInterfaceAdditionalIpConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNetworkNetworkInterfaceAdditionalIpConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.get"></a>

```go
func Get(index *f64) OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference <a name="OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resetPrivateIpVersion">ResetPrivateIpVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPrivateIpVersion` <a name="ResetPrivateIpVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resetPrivateIpVersion"></a>

```go
func ResetPrivateIpVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.privateIpVersionInput">PrivateIpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.privateIpVersion">PrivateIpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateIpVersionInput`<sup>Optional</sup> <a name="PrivateIpVersionInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.privateIpVersionInput"></a>

```go
func PrivateIpVersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIpVersion`<sup>Required</sup> <a name="PrivateIpVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.privateIpVersion"></a>

```go
func PrivateIpVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNetworkNetworkInterfaceList <a name="OceanAksNetworkNetworkInterfaceList" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksNetworkNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNetworkNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.get"></a>

```go
func Get(index *f64) OceanAksNetworkNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNetworkNetworkInterfaceOutputReference <a name="OceanAksNetworkNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksNetworkNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNetworkNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putAdditionalIpConfig">PutAdditionalIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putSecurityGroup">PutSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfig">ResetAdditionalIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetIsPrimary">ResetIsPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetSecurityGroup">ResetSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetSubnetName">ResetSubnetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalIpConfig` <a name="PutAdditionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putAdditionalIpConfig"></a>

```go
func PutAdditionalIpConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putAdditionalIpConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecurityGroup` <a name="PutSecurityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putSecurityGroup"></a>

```go
func PutSecurityGroup(value OceanAksNetworkNetworkInterfaceSecurityGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putSecurityGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a>

---

##### `ResetAdditionalIpConfig` <a name="ResetAdditionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfig"></a>

```go
func ResetAdditionalIpConfig()
```

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetAssignPublicIp"></a>

```go
func ResetAssignPublicIp()
```

##### `ResetIsPrimary` <a name="ResetIsPrimary" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetIsPrimary"></a>

```go
func ResetIsPrimary()
```

##### `ResetSecurityGroup` <a name="ResetSecurityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetSecurityGroup"></a>

```go
func ResetSecurityGroup()
```

##### `ResetSubnetName` <a name="ResetSubnetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetSubnetName"></a>

```go
func ResetSubnetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.additionalIpConfig">AdditionalIpConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList">OceanAksNetworkNetworkInterfaceAdditionalIpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.securityGroup">SecurityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference">OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.additionalIpConfigInput">AdditionalIpConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.securityGroupInput">SecurityGroupInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.subnetNameInput">SubnetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.isPrimary">IsPrimary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.subnetName">SubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalIpConfig`<sup>Required</sup> <a name="AdditionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.additionalIpConfig"></a>

```go
func AdditionalIpConfig() OceanAksNetworkNetworkInterfaceAdditionalIpConfigList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList">OceanAksNetworkNetworkInterfaceAdditionalIpConfigList</a>

---

##### `SecurityGroup`<sup>Required</sup> <a name="SecurityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.securityGroup"></a>

```go
func SecurityGroup() OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference">OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference</a>

---

##### `AdditionalIpConfigInput`<sup>Optional</sup> <a name="AdditionalIpConfigInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.additionalIpConfigInput"></a>

```go
func AdditionalIpConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput"></a>

```go
func AssignPublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```go
func IsPrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupInput`<sup>Optional</sup> <a name="SecurityGroupInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.securityGroupInput"></a>

```go
func SecurityGroupInput() OceanAksNetworkNetworkInterfaceSecurityGroup
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a>

---

##### `SubnetNameInput`<sup>Optional</sup> <a name="SubnetNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.subnetNameInput"></a>

```go
func SubnetNameInput() *string
```

- *Type:* *string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() interface{}
```

- *Type:* interface{}

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.isPrimary"></a>

```go
func IsPrimary() interface{}
```

- *Type:* interface{}

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.subnetName"></a>

```go
func SubnetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference <a name="OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksNetworkNetworkInterfaceSecurityGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNetworkNetworkInterfaceSecurityGroup
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a>

---


### OceanAksNetworkOutputReference <a name="OceanAksNetworkOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetVirtualNetworkName">ResetVirtualNetworkName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetNetworkInterface"></a>

```go
func ResetNetworkInterface()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetVirtualNetworkName` <a name="ResetVirtualNetworkName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetVirtualNetworkName"></a>

```go
func ResetVirtualNetworkName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList">OceanAksNetworkNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.virtualNetworkNameInput">VirtualNetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.networkInterface"></a>

```go
func NetworkInterface() OceanAksNetworkNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList">OceanAksNetworkNetworkInterfaceList</a>

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkNameInput`<sup>Optional</sup> <a name="VirtualNetworkNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.virtualNetworkNameInput"></a>

```go
func VirtualNetworkNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.virtualNetworkName"></a>

```go
func VirtualNetworkName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNetwork
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

---


### OceanAksOsDiskOutputReference <a name="OceanAksOsDiskOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksOsDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksOsDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

---


### OceanAksStrategyList <a name="OceanAksStrategyList" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.get"></a>

```go
func Get(index *f64) OceanAksStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksStrategyOutputReference <a name="OceanAksStrategyOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resetFallbackToOndemand">ResetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFallbackToOndemand` <a name="ResetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resetFallbackToOndemand"></a>

```go
func ResetFallbackToOndemand()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resetSpotPercentage"></a>

```go
func ResetSpotPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fallbackToOndemandInput">FallbackToOndemandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FallbackToOndemandInput`<sup>Optional</sup> <a name="FallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fallbackToOndemandInput"></a>

```go
func FallbackToOndemandInput() interface{}
```

- *Type:* interface{}

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.spotPercentageInput"></a>

```go
func SpotPercentageInput() *f64
```

- *Type:* *f64

---

##### `FallbackToOndemand`<sup>Required</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fallbackToOndemand"></a>

```go
func FallbackToOndemand() interface{}
```

- *Type:* interface{}

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.spotPercentage"></a>

```go
func SpotPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksTagList <a name="OceanAksTagList" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.get"></a>

```go
func Get(index *f64) OceanAksTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksTagOutputReference <a name="OceanAksTagOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVmSizesList <a name="OceanAksVmSizesList" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksVmSizesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksVmSizesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.get"></a>

```go
func Get(index *f64) OceanAksVmSizesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVmSizesOutputReference <a name="OceanAksVmSizesOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaks"

oceanaks.NewOceanAksVmSizesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksVmSizesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resetWhitelist">ResetWhitelist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWhitelist` <a name="ResetWhitelist" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resetWhitelist"></a>

```go
func ResetWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.whitelistInput">WhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.whitelist">Whitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WhitelistInput`<sup>Optional</sup> <a name="WhitelistInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.whitelistInput"></a>

```go
func WhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `Whitelist`<sup>Required</sup> <a name="Whitelist" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.whitelist"></a>

```go
func Whitelist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



