# `oceanAksNp` Submodule <a name="`oceanAksNp` Submodule" id="@cdktf/provider-spotinst.oceanAksNp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksNp <a name="OceanAksNp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np spotinst_ocean_aks_np}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNp(scope Construct, id *string, config OceanAksNpConfig) OceanAksNp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig">OceanAksNpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig">OceanAksNpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler">PutAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth">PutHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler">ResetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetControllerClusterId">ResetControllerClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp">ResetEnableNodePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand">ResetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth">ResetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode">ResetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount">ResetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb">ResetOsDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType">ResetOsDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints">ResetTaints</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoscaler` <a name="PutAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler"></a>

```go
func PutAutoscaler(value OceanAksNpAutoscaler)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `PutHealth` <a name="PutHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth"></a>

```go
func PutHealth(value OceanAksNpHealth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoscaler` <a name="ResetAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler"></a>

```go
func ResetAutoscaler()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAvailabilityZones"></a>

```go
func ResetAvailabilityZones()
```

##### `ResetControllerClusterId` <a name="ResetControllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetControllerClusterId"></a>

```go
func ResetControllerClusterId()
```

##### `ResetEnableNodePublicIp` <a name="ResetEnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp"></a>

```go
func ResetEnableNodePublicIp()
```

##### `ResetFallbackToOndemand` <a name="ResetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand"></a>

```go
func ResetFallbackToOndemand()
```

##### `ResetHealth` <a name="ResetHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth"></a>

```go
func ResetHealth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount"></a>

```go
func ResetMaxCount()
```

##### `ResetMaxPodsPerNode` <a name="ResetMaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode"></a>

```go
func ResetMaxPodsPerNode()
```

##### `ResetMinCount` <a name="ResetMinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount"></a>

```go
func ResetMinCount()
```

##### `ResetOsDiskSizeGb` <a name="ResetOsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb"></a>

```go
func ResetOsDiskSizeGb()
```

##### `ResetOsDiskType` <a name="ResetOsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType"></a>

```go
func ResetOsDiskType()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType"></a>

```go
func ResetOsType()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage"></a>

```go
func ResetSpotPercentage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints"></a>

```go
func ResetTaints()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.OceanAksNp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.OceanAksNp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.OceanAksNp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput">AksClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput">AksInfrastructureResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput">AksRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput">AksResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput">AutoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput">ControllerClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput">EnableNodePublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput">FallbackToOndemandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput">HealthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput">MaxCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput">MinCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput">OsDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput">OsDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName">AksClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName">AksInfrastructureResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion">AksRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName">AksResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId">ControllerClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount">MinCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType">OsDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscaler`<sup>Required</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler"></a>

```go
func Autoscaler() OceanAksNpAutoscalerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health"></a>

```go
func Health() OceanAksNpHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints"></a>

```go
func Taints() OceanAksNpTaintsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a>

---

##### `AksClusterNameInput`<sup>Optional</sup> <a name="AksClusterNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput"></a>

```go
func AksClusterNameInput() *string
```

- *Type:* *string

---

##### `AksInfrastructureResourceGroupNameInput`<sup>Optional</sup> <a name="AksInfrastructureResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput"></a>

```go
func AksInfrastructureResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `AksRegionInput`<sup>Optional</sup> <a name="AksRegionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput"></a>

```go
func AksRegionInput() *string
```

- *Type:* *string

---

##### `AksResourceGroupNameInput`<sup>Optional</sup> <a name="AksResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput"></a>

```go
func AksResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `AutoscalerInput`<sup>Optional</sup> <a name="AutoscalerInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput"></a>

```go
func AutoscalerInput() OceanAksNpAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ControllerClusterIdInput`<sup>Optional</sup> <a name="ControllerClusterIdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput"></a>

```go
func ControllerClusterIdInput() *string
```

- *Type:* *string

---

##### `EnableNodePublicIpInput`<sup>Optional</sup> <a name="EnableNodePublicIpInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput"></a>

```go
func EnableNodePublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `FallbackToOndemandInput`<sup>Optional</sup> <a name="FallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput"></a>

```go
func FallbackToOndemandInput() interface{}
```

- *Type:* interface{}

---

##### `HealthInput`<sup>Optional</sup> <a name="HealthInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput"></a>

```go
func HealthInput() OceanAksNpHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput"></a>

```go
func MaxCountInput() *f64
```

- *Type:* *f64

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput"></a>

```go
func MaxPodsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `MinCountInput`<sup>Optional</sup> <a name="MinCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput"></a>

```go
func MinCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsDiskSizeGbInput`<sup>Optional</sup> <a name="OsDiskSizeGbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput"></a>

```go
func OsDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `OsDiskTypeInput`<sup>Optional</sup> <a name="OsDiskTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput"></a>

```go
func OsDiskTypeInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput"></a>

```go
func SpotPercentageInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName"></a>

```go
func AksClusterName() *string
```

- *Type:* *string

---

##### `AksInfrastructureResourceGroupName`<sup>Required</sup> <a name="AksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName"></a>

```go
func AksInfrastructureResourceGroupName() *string
```

- *Type:* *string

---

##### `AksRegion`<sup>Required</sup> <a name="AksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion"></a>

```go
func AksRegion() *string
```

- *Type:* *string

---

##### `AksResourceGroupName`<sup>Required</sup> <a name="AksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName"></a>

```go
func AksResourceGroupName() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `ControllerClusterId`<sup>Required</sup> <a name="ControllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId"></a>

```go
func ControllerClusterId() *string
```

- *Type:* *string

---

##### `EnableNodePublicIp`<sup>Required</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp"></a>

```go
func EnableNodePublicIp() interface{}
```

- *Type:* interface{}

---

##### `FallbackToOndemand`<sup>Required</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand"></a>

```go
func FallbackToOndemand() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode"></a>

```go
func MaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount"></a>

```go
func MinCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsDiskSizeGb`<sup>Required</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb"></a>

```go
func OsDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `OsDiskType`<sup>Required</sup> <a name="OsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType"></a>

```go
func OsDiskType() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage"></a>

```go
func SpotPercentage() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksNpAutoscaler <a name="OceanAksNpAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscaler {
	AutoscaleDown: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown,
	AutoscaleHeadroom: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom,
	AutoscaleIsEnabled: interface{},
	ResourceLimits: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `AutoscaleDown`<sup>Optional</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown"></a>

```go
AutoscaleDown OceanAksNpAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscale_down OceanAksNp#autoscale_down}

---

##### `AutoscaleHeadroom`<sup>Optional</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom"></a>

```go
AutoscaleHeadroom OceanAksNpAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscale_headroom OceanAksNp#autoscale_headroom}

---

##### `AutoscaleIsEnabled`<sup>Optional</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled"></a>

```go
AutoscaleIsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits"></a>

```go
ResourceLimits OceanAksNpAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#resource_limits OceanAksNp#resource_limits}

---

### OceanAksNpAutoscalerAutoscaleDown <a name="OceanAksNpAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscalerAutoscaleDown {
	MaxScaleDownPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}. |

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```go
MaxScaleDownPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}.

---

### OceanAksNpAutoscalerAutoscaleHeadroom <a name="OceanAksNpAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscalerAutoscaleHeadroom {
	Automatic: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | automatic block. |

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic"></a>

```go
Automatic OceanAksNpAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#automatic OceanAksNp#automatic}

---

### OceanAksNpAutoscalerAutoscaleHeadroomAutomatic <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic {
	IsEnabled: interface{},
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage">Percentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#percentage OceanAksNp#percentage}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#percentage OceanAksNp#percentage}.

---

### OceanAksNpAutoscalerResourceLimits <a name="OceanAksNpAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

&oceanaksnp.OceanAksNpAutoscalerResourceLimits {
	MaxMemoryGib: *f64,
	MaxVcpu: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}. |

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib"></a>

```go
MaxMemoryGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu"></a>

```go
MaxVcpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}.

---

### OceanAksNpConfig <a name="OceanAksNpConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

&oceanaksnp.OceanAksNpConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AksClusterName: *string,
	AksInfrastructureResourceGroupName: *string,
	AksRegion: *string,
	AksResourceGroupName: *string,
	Name: *string,
	Autoscaler: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAksNp.OceanAksNpAutoscaler,
	AvailabilityZones: *[]*string,
	ControllerClusterId: *string,
	EnableNodePublicIp: interface{},
	FallbackToOndemand: interface{},
	Health: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceanAksNp.OceanAksNpHealth,
	Id: *string,
	Labels: *map[string]*string,
	MaxCount: *f64,
	MaxPodsPerNode: *f64,
	MinCount: *f64,
	OsDiskSizeGb: *f64,
	OsDiskType: *string,
	OsType: *string,
	SpotPercentage: *f64,
	Tags: *map[string]*string,
	Taints: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName">AksClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName">AksInfrastructureResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion">AksRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_region OceanAksNp#aks_region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName">AksResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#name OceanAksNp#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#availability_zones OceanAksNp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId">ControllerClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#id OceanAksNp#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#labels OceanAksNp#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount">MaxCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_count OceanAksNp#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount">MinCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#min_count OceanAksNp#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType">OsDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_type OceanAksNp#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage">SpotPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#tags OceanAksNp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName"></a>

```go
AksClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}.

---

##### `AksInfrastructureResourceGroupName`<sup>Required</sup> <a name="AksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName"></a>

```go
AksInfrastructureResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}.

---

##### `AksRegion`<sup>Required</sup> <a name="AksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion"></a>

```go
AksRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_region OceanAksNp#aks_region}.

---

##### `AksResourceGroupName`<sup>Required</sup> <a name="AksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName"></a>

```go
AksResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#name OceanAksNp#name}.

---

##### `Autoscaler`<sup>Optional</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler"></a>

```go
Autoscaler OceanAksNpAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#autoscaler OceanAksNp#autoscaler}

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#availability_zones OceanAksNp#availability_zones}.

---

##### `ControllerClusterId`<sup>Optional</sup> <a name="ControllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId"></a>

```go
ControllerClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}.

---

##### `EnableNodePublicIp`<sup>Optional</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp"></a>

```go
EnableNodePublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}.

---

##### `FallbackToOndemand`<sup>Optional</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand"></a>

```go
FallbackToOndemand interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}.

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health"></a>

```go
Health OceanAksNpHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

health block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#health OceanAksNp#health}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#id OceanAksNp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#labels OceanAksNp#labels}.

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount"></a>

```go
MaxCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_count OceanAksNp#max_count}.

---

##### `MaxPodsPerNode`<sup>Optional</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode"></a>

```go
MaxPodsPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}.

---

##### `MinCount`<sup>Optional</sup> <a name="MinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount"></a>

```go
MinCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#min_count OceanAksNp#min_count}.

---

##### `OsDiskSizeGb`<sup>Optional</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb"></a>

```go
OsDiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}.

---

##### `OsDiskType`<sup>Optional</sup> <a name="OsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType"></a>

```go
OsDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#os_type OceanAksNp#os_type}.

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage"></a>

```go
SpotPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#tags OceanAksNp#tags}.

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#taints OceanAksNp#taints}

---

### OceanAksNpHealth <a name="OceanAksNpHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

&oceanaksnp.OceanAksNpHealth {
	GracePeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#grace_period OceanAksNp#grace_period}. |

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod"></a>

```go
GracePeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#grace_period OceanAksNp#grace_period}.

---

### OceanAksNpTaints <a name="OceanAksNpTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

&oceanaksnp.OceanAksNpTaints {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#effect OceanAksNp#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#key OceanAksNp#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#value OceanAksNp#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#effect OceanAksNp#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#key OceanAksNp#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aks_np#value OceanAksNp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksNpAutoscalerAutoscaleDownOutputReference <a name="OceanAksNpAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerAutoscaleDownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerAutoscaleDownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```go
func ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```go
func MaxScaleDownPercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```go
func MaxScaleDownPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerAutoscaleHeadroomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerAutoscaleHeadroomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic">PutAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomatic` <a name="PutAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic"></a>

```go
func PutAutomatic(value OceanAksNpAutoscalerAutoscaleHeadroomAutomatic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic"></a>

```go
func ResetAutomatic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput">AutomaticInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic"></a>

```go
func Automatic() OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput"></a>

```go
func AutomaticInput() OceanAksNpAutoscalerAutoscaleHeadroomAutomatic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---


### OceanAksNpAutoscalerOutputReference <a name="OceanAksNpAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown">PutAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom">PutAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown">ResetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom">ResetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled">ResetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaleDown` <a name="PutAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown"></a>

```go
func PutAutoscaleDown(value OceanAksNpAutoscalerAutoscaleDown)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `PutAutoscaleHeadroom` <a name="PutAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```go
func PutAutoscaleHeadroom(value OceanAksNpAutoscalerAutoscaleHeadroom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits"></a>

```go
func PutResourceLimits(value OceanAksNpAutoscalerResourceLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `ResetAutoscaleDown` <a name="ResetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown"></a>

```go
func ResetAutoscaleDown()
```

##### `ResetAutoscaleHeadroom` <a name="ResetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```go
func ResetAutoscaleHeadroom()
```

##### `ResetAutoscaleIsEnabled` <a name="ResetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```go
func ResetAutoscaleIsEnabled()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits"></a>

```go
func ResetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput">AutoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput">AutoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput">AutoscaleIsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscaleDown`<sup>Required</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown"></a>

```go
func AutoscaleDown() OceanAksNpAutoscalerAutoscaleDownOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a>

---

##### `AutoscaleHeadroom`<sup>Required</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```go
func AutoscaleHeadroom() OceanAksNpAutoscalerAutoscaleHeadroomOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits"></a>

```go
func ResourceLimits() OceanAksNpAutoscalerResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a>

---

##### `AutoscaleDownInput`<sup>Optional</sup> <a name="AutoscaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput"></a>

```go
func AutoscaleDownInput() OceanAksNpAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `AutoscaleHeadroomInput`<sup>Optional</sup> <a name="AutoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```go
func AutoscaleHeadroomInput() OceanAksNpAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `AutoscaleIsEnabledInput`<sup>Optional</sup> <a name="AutoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```go
func AutoscaleIsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput"></a>

```go
func ResourceLimitsInput() OceanAksNpAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `AutoscaleIsEnabled`<sup>Required</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```go
func AutoscaleIsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---


### OceanAksNpAutoscalerResourceLimitsOutputReference <a name="OceanAksNpAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNpAutoscalerResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpAutoscalerResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```go
func ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```go
func ResetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```go
func MaxMemoryGibInput() *f64
```

- *Type:* *f64

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```go
func MaxVcpuInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```go
func MaxMemoryGib() *f64
```

- *Type:* *f64

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```go
func MaxVcpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---


### OceanAksNpHealthOutputReference <a name="OceanAksNpHealthOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNpHealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksNpHealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod"></a>

```go
func ResetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput"></a>

```go
func GracePeriodInput() *f64
```

- *Type:* *f64

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod"></a>

```go
func GracePeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksNpHealth
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---


### OceanAksNpTaintsList <a name="OceanAksNpTaintsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNpTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksNpTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get"></a>

```go
func Get(index *f64) OceanAksNpTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksNpTaintsOutputReference <a name="OceanAksNpTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceanaksnp"

oceanaksnp.NewOceanAksNpTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksNpTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


