# `spotinst_ocean_aks_virtual_node_group`

Refer to the Terraform Registory for docs: [`spotinst_ocean_aks_virtual_node_group`](https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group).

# `oceanAksVirtualNodeGroup` Submodule <a name="`oceanAksVirtualNodeGroup` Submodule" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksVirtualNodeGroup <a name="OceanAksVirtualNodeGroup" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group spotinst_ocean_aks_virtual_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroup(scope Construct, id *string, config OceanAksVirtualNodeGroupConfig) OceanAksVirtualNodeGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig">OceanAksVirtualNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig">OceanAksVirtualNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel">PutLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification">PutLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint">PutTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLaunchSpecification">ResetLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetTaint">ResetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale"></a>

```go
func PutAutoscale(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putAutoscale.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLabel` <a name="PutLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel"></a>

```go
func PutLabel(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLabel.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLaunchSpecification` <a name="PutLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification"></a>

```go
func PutLaunchSpecification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putLaunchSpecification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits"></a>

```go
func PutResourceLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putResourceLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaint` <a name="PutTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint"></a>

```go
func PutTaint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.putTaint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetAutoscale"></a>

```go
func ResetAutoscale()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetLaunchSpecification` <a name="ResetLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetLaunchSpecification"></a>

```go
func ResetLaunchSpecification()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetResourceLimits"></a>

```go
func ResetResourceLimits()
```

##### `ResetTaint` <a name="ResetTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetTaint"></a>

```go
func ResetTaint()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.resetZones"></a>

```go
func ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanAksVirtualNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.OceanAksVirtualNodeGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.OceanAksVirtualNodeGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.OceanAksVirtualNodeGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.OceanAksVirtualNodeGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceanAksVirtualNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceanAksVirtualNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceanAksVirtualNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceanAksVirtualNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList">OceanAksVirtualNodeGroupAutoscaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.label">Label</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList">OceanAksVirtualNodeGroupLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecification">LaunchSpecification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList">OceanAksVirtualNodeGroupLaunchSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList">OceanAksVirtualNodeGroupResourceLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList">OceanAksVirtualNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscaleInput">AutoscaleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.labelInput">LabelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecificationInput">LaunchSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanIdInput">OceanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taintInput">TaintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanId">OceanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscale"></a>

```go
func Autoscale() OceanAksVirtualNodeGroupAutoscaleList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList">OceanAksVirtualNodeGroupAutoscaleList</a>

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.label"></a>

```go
func Label() OceanAksVirtualNodeGroupLabelList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList">OceanAksVirtualNodeGroupLabelList</a>

---

##### `LaunchSpecification`<sup>Required</sup> <a name="LaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecification"></a>

```go
func LaunchSpecification() OceanAksVirtualNodeGroupLaunchSpecificationList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList">OceanAksVirtualNodeGroupLaunchSpecificationList</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimits"></a>

```go
func ResourceLimits() OceanAksVirtualNodeGroupResourceLimitsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList">OceanAksVirtualNodeGroupResourceLimitsList</a>

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taint"></a>

```go
func Taint() OceanAksVirtualNodeGroupTaintList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList">OceanAksVirtualNodeGroupTaintList</a>

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.autoscaleInput"></a>

```go
func AutoscaleInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.labelInput"></a>

```go
func LabelInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchSpecificationInput`<sup>Optional</sup> <a name="LaunchSpecificationInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.launchSpecificationInput"></a>

```go
func LaunchSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OceanIdInput`<sup>Optional</sup> <a name="OceanIdInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanIdInput"></a>

```go
func OceanIdInput() *string
```

- *Type:* *string

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.resourceLimitsInput"></a>

```go
func ResourceLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `TaintInput`<sup>Optional</sup> <a name="TaintInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.taintInput"></a>

```go
func TaintInput() interface{}
```

- *Type:* interface{}

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.oceanId"></a>

```go
func OceanId() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksVirtualNodeGroupAutoscale <a name="OceanAksVirtualNodeGroupAutoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupAutoscale {
	AutoHeadroomPercentage: *f64,
	AutoscaleHeadroom: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#auto_headroom_percentage OceanAksVirtualNodeGroup#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code>interface{}</code> | autoscale_headroom block. |

---

##### `AutoHeadroomPercentage`<sup>Optional</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoHeadroomPercentage"></a>

```go
AutoHeadroomPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#auto_headroom_percentage OceanAksVirtualNodeGroup#auto_headroom_percentage}.

---

##### `AutoscaleHeadroom`<sup>Optional</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscale.property.autoscaleHeadroom"></a>

```go
AutoscaleHeadroom interface{}
```

- *Type:* interface{}

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#autoscale_headroom OceanAksVirtualNodeGroup#autoscale_headroom}

---

### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom {
	NumOfUnits: *f64,
	CpuPerUnit: *f64,
	GpuPerUnit: *f64,
	MemoryPerUnit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#num_of_units OceanAksVirtualNodeGroup#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#cpu_per_unit OceanAksVirtualNodeGroup#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#gpu_per_unit OceanAksVirtualNodeGroup#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#memory_per_unit OceanAksVirtualNodeGroup#memory_per_unit}. |

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.numOfUnits"></a>

```go
NumOfUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#num_of_units OceanAksVirtualNodeGroup#num_of_units}.

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.cpuPerUnit"></a>

```go
CpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#cpu_per_unit OceanAksVirtualNodeGroup#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.gpuPerUnit"></a>

```go
GpuPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#gpu_per_unit OceanAksVirtualNodeGroup#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroom.property.memoryPerUnit"></a>

```go
MemoryPerUnit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#memory_per_unit OceanAksVirtualNodeGroup#memory_per_unit}.

---

### OceanAksVirtualNodeGroupConfig <a name="OceanAksVirtualNodeGroupConfig" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OceanId: *string,
	Autoscale: interface{},
	Id: *string,
	Label: interface{},
	LaunchSpecification: interface{},
	ResourceLimits: interface{},
	Taint: interface{},
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#name OceanAksVirtualNodeGroup#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.oceanId">OceanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#ocean_id OceanAksVirtualNodeGroup#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.autoscale">Autoscale</a></code> | <code>interface{}</code> | autoscale block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#id OceanAksVirtualNodeGroup#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.label">Label</a></code> | <code>interface{}</code> | label block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.launchSpecification">LaunchSpecification</a></code> | <code>interface{}</code> | launch_specification block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.resourceLimits">ResourceLimits</a></code> | <code>interface{}</code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.taint">Taint</a></code> | <code>interface{}</code> | taint block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#zones OceanAksVirtualNodeGroup#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#name OceanAksVirtualNodeGroup#name}.

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.oceanId"></a>

```go
OceanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#ocean_id OceanAksVirtualNodeGroup#ocean_id}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.autoscale"></a>

```go
Autoscale interface{}
```

- *Type:* interface{}

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#autoscale OceanAksVirtualNodeGroup#autoscale}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#id OceanAksVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.label"></a>

```go
Label interface{}
```

- *Type:* interface{}

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#label OceanAksVirtualNodeGroup#label}

---

##### `LaunchSpecification`<sup>Optional</sup> <a name="LaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.launchSpecification"></a>

```go
LaunchSpecification interface{}
```

- *Type:* interface{}

launch_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#launch_specification OceanAksVirtualNodeGroup#launch_specification}

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.resourceLimits"></a>

```go
ResourceLimits interface{}
```

- *Type:* interface{}

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#resource_limits OceanAksVirtualNodeGroup#resource_limits}

---

##### `Taint`<sup>Optional</sup> <a name="Taint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.taint"></a>

```go
Taint interface{}
```

- *Type:* interface{}

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#taint OceanAksVirtualNodeGroup#taint}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#zones OceanAksVirtualNodeGroup#zones}.

---

### OceanAksVirtualNodeGroupLabel <a name="OceanAksVirtualNodeGroupLabel" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupLabel {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabel.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

### OceanAksVirtualNodeGroupLaunchSpecification <a name="OceanAksVirtualNodeGroupLaunchSpecification" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupLaunchSpecification {
	MaxPods: *f64,
	OsDisk: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk,
	Tag: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.maxPods">MaxPods</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#max_pods OceanAksVirtualNodeGroup#max_pods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.tag">Tag</a></code> | <code>interface{}</code> | tag block. |

---

##### `MaxPods`<sup>Optional</sup> <a name="MaxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.maxPods"></a>

```go
MaxPods *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#max_pods OceanAksVirtualNodeGroup#max_pods}.

---

##### `OsDisk`<sup>Optional</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.osDisk"></a>

```go
OsDisk OceanAksVirtualNodeGroupLaunchSpecificationOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#os_disk OceanAksVirtualNodeGroup#os_disk}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecification.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#tag OceanAksVirtualNodeGroup#tag}

---

### OceanAksVirtualNodeGroupLaunchSpecificationOsDisk <a name="OceanAksVirtualNodeGroupLaunchSpecificationOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk {
	SizeGb: *f64,
	Type: *string,
	UtilizeEphemeralStorage: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#size_gb OceanAksVirtualNodeGroup#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#type OceanAksVirtualNodeGroup#type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.utilizeEphemeralStorage">UtilizeEphemeralStorage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#utilize_ephemeral_storage OceanAksVirtualNodeGroup#utilize_ephemeral_storage}. |

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#size_gb OceanAksVirtualNodeGroup#size_gb}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#type OceanAksVirtualNodeGroup#type}.

---

##### `UtilizeEphemeralStorage`<sup>Optional</sup> <a name="UtilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk.property.utilizeEphemeralStorage"></a>

```go
UtilizeEphemeralStorage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#utilize_ephemeral_storage OceanAksVirtualNodeGroup#utilize_ephemeral_storage}.

---

### OceanAksVirtualNodeGroupLaunchSpecificationTag <a name="OceanAksVirtualNodeGroupLaunchSpecificationTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupLaunchSpecificationTag {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

### OceanAksVirtualNodeGroupResourceLimits <a name="OceanAksVirtualNodeGroupResourceLimits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupResourceLimits {
	MaxInstanceCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#max_instance_count OceanAksVirtualNodeGroup#max_instance_count}. |

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimits.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#max_instance_count OceanAksVirtualNodeGroup#max_instance_count}.

---

### OceanAksVirtualNodeGroupTaint <a name="OceanAksVirtualNodeGroupTaint" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

&oceanaksvirtualnodegroup.OceanAksVirtualNodeGroupTaint {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#effect OceanAksVirtualNodeGroup#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#effect OceanAksVirtualNodeGroup#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#key OceanAksVirtualNodeGroup#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaint.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.147.0/docs/resources/ocean_aks_virtual_node_group#value OceanAksVirtualNodeGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get"></a>

```go
func Get(index *f64) OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference <a name="OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```go
func ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetGpuPerUnit"></a>

```go
func ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```go
func ResetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```go
func CpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnitInput"></a>

```go
func GpuPerUnitInput() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```go
func MemoryPerUnitInput() *f64
```

- *Type:* *f64

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```go
func NumOfUnitsInput() *f64
```

- *Type:* *f64

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```go
func CpuPerUnit() *f64
```

- *Type:* *f64

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.gpuPerUnit"></a>

```go
func GpuPerUnit() *f64
```

- *Type:* *f64

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```go
func MemoryPerUnit() *f64
```

- *Type:* *f64

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```go
func NumOfUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupAutoscaleList <a name="OceanAksVirtualNodeGroupAutoscaleList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupAutoscaleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksVirtualNodeGroupAutoscaleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get"></a>

```go
func Get(index *f64) OceanAksVirtualNodeGroupAutoscaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupAutoscaleOutputReference <a name="OceanAksVirtualNodeGroupAutoscaleOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupAutoscaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksVirtualNodeGroupAutoscaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom">PutAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoHeadroomPercentage">ResetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoscaleHeadroom">ResetAutoscaleHeadroom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaleHeadroom` <a name="PutAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom"></a>

```go
func PutAutoscaleHeadroom(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoHeadroomPercentage` <a name="ResetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoHeadroomPercentage"></a>

```go
func ResetAutoHeadroomPercentage()
```

##### `ResetAutoscaleHeadroom` <a name="ResetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.resetAutoscaleHeadroom"></a>

```go
func ResetAutoscaleHeadroom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentageInput">AutoHeadroomPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroomInput">AutoscaleHeadroomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscaleHeadroom`<sup>Required</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroom"></a>

```go
func AutoscaleHeadroom() OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList">OceanAksVirtualNodeGroupAutoscaleAutoscaleHeadroomList</a>

---

##### `AutoHeadroomPercentageInput`<sup>Optional</sup> <a name="AutoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentageInput"></a>

```go
func AutoHeadroomPercentageInput() *f64
```

- *Type:* *f64

---

##### `AutoscaleHeadroomInput`<sup>Optional</sup> <a name="AutoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoscaleHeadroomInput"></a>

```go
func AutoscaleHeadroomInput() interface{}
```

- *Type:* interface{}

---

##### `AutoHeadroomPercentage`<sup>Required</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.autoHeadroomPercentage"></a>

```go
func AutoHeadroomPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupAutoscaleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupLabelList <a name="OceanAksVirtualNodeGroupLabelList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupLabelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksVirtualNodeGroupLabelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get"></a>

```go
func Get(index *f64) OceanAksVirtualNodeGroupLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupLabelOutputReference <a name="OceanAksVirtualNodeGroupLabelOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupLabelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksVirtualNodeGroupLabelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLabelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupLaunchSpecificationList <a name="OceanAksVirtualNodeGroupLaunchSpecificationList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupLaunchSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksVirtualNodeGroupLaunchSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get"></a>

```go
func Get(index *f64) OceanAksVirtualNodeGroupLaunchSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetUtilizeEphemeralStorage">ResetUtilizeEphemeralStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUtilizeEphemeralStorage` <a name="ResetUtilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.resetUtilizeEphemeralStorage"></a>

```go
func ResetUtilizeEphemeralStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorageInput">UtilizeEphemeralStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorage">UtilizeEphemeralStorage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UtilizeEphemeralStorageInput`<sup>Optional</sup> <a name="UtilizeEphemeralStorageInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorageInput"></a>

```go
func UtilizeEphemeralStorageInput() interface{}
```

- *Type:* interface{}

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UtilizeEphemeralStorage`<sup>Required</sup> <a name="UtilizeEphemeralStorage" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.utilizeEphemeralStorage"></a>

```go
func UtilizeEphemeralStorage() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() OceanAksVirtualNodeGroupLaunchSpecificationOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---


### OceanAksVirtualNodeGroupLaunchSpecificationOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupLaunchSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksVirtualNodeGroupLaunchSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk">PutOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetMaxPods">ResetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetOsDisk">ResetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOsDisk` <a name="PutOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk"></a>

```go
func PutOsDisk(value OceanAksVirtualNodeGroupLaunchSpecificationOsDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag"></a>

```go
func PutTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.putTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaxPods` <a name="ResetMaxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetMaxPods"></a>

```go
func ResetMaxPods()
```

##### `ResetOsDisk` <a name="ResetOsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetOsDisk"></a>

```go
func ResetOsDisk()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDisk">OsDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference">OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList">OceanAksVirtualNodeGroupLaunchSpecificationTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPodsInput">MaxPodsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDiskInput">OsDiskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPods">MaxPods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OsDisk`<sup>Required</sup> <a name="OsDisk" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDisk"></a>

```go
func OsDisk() OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference">OceanAksVirtualNodeGroupLaunchSpecificationOsDiskOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tag"></a>

```go
func Tag() OceanAksVirtualNodeGroupLaunchSpecificationTagList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList">OceanAksVirtualNodeGroupLaunchSpecificationTagList</a>

---

##### `MaxPodsInput`<sup>Optional</sup> <a name="MaxPodsInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPodsInput"></a>

```go
func MaxPodsInput() *f64
```

- *Type:* *f64

---

##### `OsDiskInput`<sup>Optional</sup> <a name="OsDiskInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.osDiskInput"></a>

```go
func OsDiskInput() OceanAksVirtualNodeGroupLaunchSpecificationOsDisk
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOsDisk">OceanAksVirtualNodeGroupLaunchSpecificationOsDisk</a>

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `MaxPods`<sup>Required</sup> <a name="MaxPods" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.maxPods"></a>

```go
func MaxPods() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupLaunchSpecificationTagList <a name="OceanAksVirtualNodeGroupLaunchSpecificationTagList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupLaunchSpecificationTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksVirtualNodeGroupLaunchSpecificationTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get"></a>

```go
func Get(index *f64) OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference <a name="OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupLaunchSpecificationTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupResourceLimitsList <a name="OceanAksVirtualNodeGroupResourceLimitsList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupResourceLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksVirtualNodeGroupResourceLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get"></a>

```go
func Get(index *f64) OceanAksVirtualNodeGroupResourceLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupResourceLimitsOutputReference <a name="OceanAksVirtualNodeGroupResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksVirtualNodeGroupResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```go
func ResetMaxInstanceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupTaintList <a name="OceanAksVirtualNodeGroupTaintList" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupTaintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceanAksVirtualNodeGroupTaintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get"></a>

```go
func Get(index *f64) OceanAksVirtualNodeGroupTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceanAksVirtualNodeGroupTaintOutputReference <a name="OceanAksVirtualNodeGroupTaintOutputReference" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v12/oceanaksvirtualnodegroup"

oceanaksvirtualnodegroup.NewOceanAksVirtualNodeGroupTaintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceanAksVirtualNodeGroupTaintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksVirtualNodeGroup.OceanAksVirtualNodeGroupTaintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



