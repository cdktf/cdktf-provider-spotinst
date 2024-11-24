# `oceancdRolloutSpec` Submodule <a name="`oceancdRolloutSpec` Submodule" id="@cdktf/provider-spotinst.oceancdRolloutSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdRolloutSpec <a name="OceancdRolloutSpec" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec spotinst_oceancd_rollout_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpec(scope Construct, id *string, config OceancdRolloutSpecConfig) OceancdRolloutSpec
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig">OceancdRolloutSpecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig">OceancdRolloutSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy">PutFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment">PutSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments">PutSpotDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic">PutTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployment">ResetSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployments">ResetSpotDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetTraffic">ResetTraffic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFailurePolicy` <a name="PutFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy"></a>

```go
func PutFailurePolicy(value OceancdRolloutSpecFailurePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---

##### `PutSpotDeployment` <a name="PutSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment"></a>

```go
func PutSpotDeployment(value OceancdRolloutSpecSpotDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---

##### `PutSpotDeployments` <a name="PutSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments"></a>

```go
func PutSpotDeployments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy"></a>

```go
func PutStrategy(value OceancdRolloutSpecStrategy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---

##### `PutTraffic` <a name="PutTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic"></a>

```go
func PutTraffic(value OceancdRolloutSpecTraffic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetId"></a>

```go
func ResetId()
```

##### `ResetSpotDeployment` <a name="ResetSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployment"></a>

```go
func ResetSpotDeployment()
```

##### `ResetSpotDeployments` <a name="ResetSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployments"></a>

```go
func ResetSpotDeployments()
```

##### `ResetTraffic` <a name="ResetTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetTraffic"></a>

```go
func ResetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.OceancdRolloutSpec_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.OceancdRolloutSpec_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.OceancdRolloutSpec_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.OceancdRolloutSpec_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceancdRolloutSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceancdRolloutSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceancdRolloutSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference">OceancdRolloutSpecFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployment">SpotDeployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference">OceancdRolloutSpecSpotDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployments">SpotDeployments</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList">OceancdRolloutSpecSpotDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference">OceancdRolloutSpecStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference">OceancdRolloutSpecTrafficOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicyInput">FailurePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecNameInput">RolloutSpecNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentInput">SpotDeploymentInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentsInput">SpotDeploymentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategyInput">StrategyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.trafficInput">TrafficInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecName">RolloutSpecName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicy"></a>

```go
func FailurePolicy() OceancdRolloutSpecFailurePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference">OceancdRolloutSpecFailurePolicyOutputReference</a>

---

##### `SpotDeployment`<sup>Required</sup> <a name="SpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployment"></a>

```go
func SpotDeployment() OceancdRolloutSpecSpotDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference">OceancdRolloutSpecSpotDeploymentOutputReference</a>

---

##### `SpotDeployments`<sup>Required</sup> <a name="SpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployments"></a>

```go
func SpotDeployments() OceancdRolloutSpecSpotDeploymentsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList">OceancdRolloutSpecSpotDeploymentsList</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategy"></a>

```go
func Strategy() OceancdRolloutSpecStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference">OceancdRolloutSpecStrategyOutputReference</a>

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.traffic"></a>

```go
func Traffic() OceancdRolloutSpecTrafficOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference">OceancdRolloutSpecTrafficOutputReference</a>

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() OceancdRolloutSpecFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RolloutSpecNameInput`<sup>Optional</sup> <a name="RolloutSpecNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecNameInput"></a>

```go
func RolloutSpecNameInput() *string
```

- *Type:* *string

---

##### `SpotDeploymentInput`<sup>Optional</sup> <a name="SpotDeploymentInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentInput"></a>

```go
func SpotDeploymentInput() OceancdRolloutSpecSpotDeployment
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---

##### `SpotDeploymentsInput`<sup>Optional</sup> <a name="SpotDeploymentsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentsInput"></a>

```go
func SpotDeploymentsInput() interface{}
```

- *Type:* interface{}

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategyInput"></a>

```go
func StrategyInput() OceancdRolloutSpecStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---

##### `TrafficInput`<sup>Optional</sup> <a name="TrafficInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.trafficInput"></a>

```go
func TrafficInput() OceancdRolloutSpecTraffic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RolloutSpecName`<sup>Required</sup> <a name="RolloutSpecName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecName"></a>

```go
func RolloutSpecName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdRolloutSpecConfig <a name="OceancdRolloutSpecConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RolloutSpecName: *string,
	Strategy: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecStrategy,
	FailurePolicy: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy,
	Id: *string,
	SpotDeployment: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment,
	SpotDeployments: interface{},
	Traffic: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTraffic,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.rolloutSpecName">RolloutSpecName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployment">SpotDeployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | spot_deployment block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployments">SpotDeployments</a></code> | <code>interface{}</code> | spot_deployments block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | traffic block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RolloutSpecName`<sup>Required</sup> <a name="RolloutSpecName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.rolloutSpecName"></a>

```go
RolloutSpecName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}.

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.strategy"></a>

```go
Strategy OceancdRolloutSpecStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#strategy OceancdRolloutSpec#strategy}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.failurePolicy"></a>

```go
FailurePolicy OceancdRolloutSpecFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#failure_policy OceancdRolloutSpec#failure_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SpotDeployment`<sup>Optional</sup> <a name="SpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployment"></a>

```go
SpotDeployment OceancdRolloutSpecSpotDeployment
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

spot_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployment OceancdRolloutSpec#spot_deployment}

---

##### `SpotDeployments`<sup>Optional</sup> <a name="SpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployments"></a>

```go
SpotDeployments interface{}
```

- *Type:* interface{}

spot_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployments OceancdRolloutSpec#spot_deployments}

---

##### `Traffic`<sup>Optional</sup> <a name="Traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.traffic"></a>

```go
Traffic OceancdRolloutSpecTraffic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#traffic OceancdRolloutSpec#traffic}

---

### OceancdRolloutSpecFailurePolicy <a name="OceancdRolloutSpecFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecFailurePolicy {
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}.

---

### OceancdRolloutSpecSpotDeployment <a name="OceancdRolloutSpecSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecSpotDeployment {
	SpotDeploymentClusterId: *string,
	SpotDeploymentName: *string,
	SpotDeploymentNamespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentClusterId">SpotDeploymentClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentName">SpotDeploymentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentNamespace">SpotDeploymentNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}. |

---

##### `SpotDeploymentClusterId`<sup>Optional</sup> <a name="SpotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentClusterId"></a>

```go
SpotDeploymentClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}.

---

##### `SpotDeploymentName`<sup>Optional</sup> <a name="SpotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentName"></a>

```go
SpotDeploymentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}.

---

##### `SpotDeploymentNamespace`<sup>Optional</sup> <a name="SpotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentNamespace"></a>

```go
SpotDeploymentNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}.

---

### OceancdRolloutSpecSpotDeployments <a name="OceancdRolloutSpecSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecSpotDeployments {
	SpotDeploymentsClusterId: *string,
	SpotDeploymentsName: *string,
	SpotDeploymentsNamespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsClusterId">SpotDeploymentsClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsName">SpotDeploymentsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsNamespace">SpotDeploymentsNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}. |

---

##### `SpotDeploymentsClusterId`<sup>Optional</sup> <a name="SpotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsClusterId"></a>

```go
SpotDeploymentsClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}.

---

##### `SpotDeploymentsName`<sup>Optional</sup> <a name="SpotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsName"></a>

```go
SpotDeploymentsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}.

---

##### `SpotDeploymentsNamespace`<sup>Optional</sup> <a name="SpotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsNamespace"></a>

```go
SpotDeploymentsNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}.

---

### OceancdRolloutSpecStrategy <a name="OceancdRolloutSpecStrategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecStrategy {
	StrategyName: *string,
	Args: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.strategyName">StrategyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.args">Args</a></code> | <code>interface{}</code> | args block. |

---

##### `StrategyName`<sup>Required</sup> <a name="StrategyName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.strategyName"></a>

```go
StrategyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.args"></a>

```go
Args interface{}
```

- *Type:* interface{}

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#args OceancdRolloutSpec#args}

---

### OceancdRolloutSpecStrategyArgs <a name="OceancdRolloutSpecStrategyArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecStrategyArgs {
	ArgName: *string,
	ArgValue: *string,
	ValueFrom: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argName">ArgName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argValue">ArgValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | value_from block. |

---

##### `ArgName`<sup>Required</sup> <a name="ArgName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argName"></a>

```go
ArgName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}.

---

##### `ArgValue`<sup>Optional</sup> <a name="ArgValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argValue"></a>

```go
ArgValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}.

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.valueFrom"></a>

```go
ValueFrom OceancdRolloutSpecStrategyArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#value_from OceancdRolloutSpec#value_from}

---

### OceancdRolloutSpecStrategyArgsValueFrom <a name="OceancdRolloutSpecStrategyArgsValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecStrategyArgsValueFrom {
	FieldRef: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.property.fieldRef">FieldRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | field_ref block. |

---

##### `FieldRef`<sup>Required</sup> <a name="FieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.property.fieldRef"></a>

```go
FieldRef OceancdRolloutSpecStrategyArgsValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#field_ref OceancdRolloutSpec#field_ref}

---

### OceancdRolloutSpecStrategyArgsValueFromFieldRef <a name="OceancdRolloutSpecStrategyArgsValueFromFieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecStrategyArgsValueFromFieldRef {
	FieldPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.property.fieldPath">FieldPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}. |

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}.

---

### OceancdRolloutSpecTraffic <a name="OceancdRolloutSpecTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTraffic {
	Alb: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb,
	Ambassador: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador,
	CanaryService: *string,
	Istio: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio,
	Nginx: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx,
	PingPong: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong,
	Smi: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi,
	StableService: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.alb">Alb</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.ambassador">Ambassador</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | ambassador block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.canaryService">CanaryService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.istio">Istio</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | istio block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.nginx">Nginx</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | nginx block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.pingPong">PingPong</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | ping_pong block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.smi">Smi</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | smi block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.stableService">StableService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}. |

---

##### `Alb`<sup>Optional</sup> <a name="Alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.alb"></a>

```go
Alb OceancdRolloutSpecTrafficAlb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#alb OceancdRolloutSpec#alb}

---

##### `Ambassador`<sup>Optional</sup> <a name="Ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.ambassador"></a>

```go
Ambassador OceancdRolloutSpecTrafficAmbassador
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

ambassador block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#ambassador OceancdRolloutSpec#ambassador}

---

##### `CanaryService`<sup>Optional</sup> <a name="CanaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.canaryService"></a>

```go
CanaryService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}.

---

##### `Istio`<sup>Optional</sup> <a name="Istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.istio"></a>

```go
Istio OceancdRolloutSpecTrafficIstio
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#istio OceancdRolloutSpec#istio}

---

##### `Nginx`<sup>Optional</sup> <a name="Nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.nginx"></a>

```go
Nginx OceancdRolloutSpecTrafficNginx
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

nginx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#nginx OceancdRolloutSpec#nginx}

---

##### `PingPong`<sup>Optional</sup> <a name="PingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.pingPong"></a>

```go
PingPong OceancdRolloutSpecTrafficPingPong
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

ping_pong block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#ping_pong OceancdRolloutSpec#ping_pong}

---

##### `Smi`<sup>Optional</sup> <a name="Smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.smi"></a>

```go
Smi OceancdRolloutSpecTrafficSmi
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

smi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#smi OceancdRolloutSpec#smi}

---

##### `StableService`<sup>Optional</sup> <a name="StableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.stableService"></a>

```go
StableService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}.

---

### OceancdRolloutSpecTrafficAlb <a name="OceancdRolloutSpecTrafficAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficAlb {
	AlbIngress: *string,
	AlbRootService: *string,
	ServicePort: *f64,
	AlbAnnotationPrefix: *string,
	StickinessConfig: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albIngress">AlbIngress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albRootService">AlbRootService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.servicePort">ServicePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albAnnotationPrefix">AlbAnnotationPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.stickinessConfig">StickinessConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | stickiness_config block. |

---

##### `AlbIngress`<sup>Required</sup> <a name="AlbIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albIngress"></a>

```go
AlbIngress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}.

---

##### `AlbRootService`<sup>Required</sup> <a name="AlbRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albRootService"></a>

```go
AlbRootService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}.

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.servicePort"></a>

```go
ServicePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}.

---

##### `AlbAnnotationPrefix`<sup>Optional</sup> <a name="AlbAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albAnnotationPrefix"></a>

```go
AlbAnnotationPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}.

---

##### `StickinessConfig`<sup>Optional</sup> <a name="StickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.stickinessConfig"></a>

```go
StickinessConfig OceancdRolloutSpecTrafficAlbStickinessConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

stickiness_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#stickiness_config OceancdRolloutSpec#stickiness_config}

---

### OceancdRolloutSpecTrafficAlbStickinessConfig <a name="OceancdRolloutSpecTrafficAlbStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficAlbStickinessConfig {
	DurationSeconds: *f64,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}. |

---

##### `DurationSeconds`<sup>Optional</sup> <a name="DurationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.durationSeconds"></a>

```go
DurationSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}.

---

### OceancdRolloutSpecTrafficAmbassador <a name="OceancdRolloutSpecTrafficAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficAmbassador {
	Mappings: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.property.mappings">Mappings</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}. |

---

##### `Mappings`<sup>Required</sup> <a name="Mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.property.mappings"></a>

```go
Mappings *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}.

---

### OceancdRolloutSpecTrafficIstio <a name="OceancdRolloutSpecTrafficIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficIstio {
	VirtualServices: interface{},
	DestinationRule: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.virtualServices">VirtualServices</a></code> | <code>interface{}</code> | virtual_services block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.destinationRule">DestinationRule</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | destination_rule block. |

---

##### `VirtualServices`<sup>Required</sup> <a name="VirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.virtualServices"></a>

```go
VirtualServices interface{}
```

- *Type:* interface{}

virtual_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#virtual_services OceancdRolloutSpec#virtual_services}

---

##### `DestinationRule`<sup>Optional</sup> <a name="DestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.destinationRule"></a>

```go
DestinationRule OceancdRolloutSpecTrafficIstioDestinationRule
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

destination_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#destination_rule OceancdRolloutSpec#destination_rule}

---

### OceancdRolloutSpecTrafficIstioDestinationRule <a name="OceancdRolloutSpecTrafficIstioDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficIstioDestinationRule {
	CanarySubsetName: *string,
	DestinationRuleName: *string,
	StableSubsetName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.canarySubsetName">CanarySubsetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.destinationRuleName">DestinationRuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.stableSubsetName">StableSubsetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}. |

---

##### `CanarySubsetName`<sup>Required</sup> <a name="CanarySubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.canarySubsetName"></a>

```go
CanarySubsetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}.

---

##### `DestinationRuleName`<sup>Required</sup> <a name="DestinationRuleName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.destinationRuleName"></a>

```go
DestinationRuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}.

---

##### `StableSubsetName`<sup>Required</sup> <a name="StableSubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.stableSubsetName"></a>

```go
StableSubsetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}.

---

### OceancdRolloutSpecTrafficIstioVirtualServices <a name="OceancdRolloutSpecTrafficIstioVirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficIstioVirtualServices {
	VirtualServiceName: *string,
	TlsRoutes: interface{},
	VirtualServiceRoutes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceName">VirtualServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.tlsRoutes">TlsRoutes</a></code> | <code>interface{}</code> | tls_routes block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceRoutes">VirtualServiceRoutes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}. |

---

##### `VirtualServiceName`<sup>Required</sup> <a name="VirtualServiceName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceName"></a>

```go
VirtualServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}.

---

##### `TlsRoutes`<sup>Optional</sup> <a name="TlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.tlsRoutes"></a>

```go
TlsRoutes interface{}
```

- *Type:* interface{}

tls_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#tls_routes OceancdRolloutSpec#tls_routes}

---

##### `VirtualServiceRoutes`<sup>Optional</sup> <a name="VirtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceRoutes"></a>

```go
VirtualServiceRoutes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}.

---

### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes {
	Port: *f64,
	SniHosts: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.sniHosts">SniHosts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}.

---

##### `SniHosts`<sup>Optional</sup> <a name="SniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.sniHosts"></a>

```go
SniHosts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}.

---

### OceancdRolloutSpecTrafficNginx <a name="OceancdRolloutSpecTrafficNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficNginx {
	StableIngress: *string,
	AdditionalIngressAnnotation: github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation,
	NginxAnnotationPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.stableIngress">StableIngress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.additionalIngressAnnotation">AdditionalIngressAnnotation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | additional_ingress_annotation block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.nginxAnnotationPrefix">NginxAnnotationPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}. |

---

##### `StableIngress`<sup>Required</sup> <a name="StableIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.stableIngress"></a>

```go
StableIngress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}.

---

##### `AdditionalIngressAnnotation`<sup>Optional</sup> <a name="AdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.additionalIngressAnnotation"></a>

```go
AdditionalIngressAnnotation OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

additional_ingress_annotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#additional_ingress_annotation OceancdRolloutSpec#additional_ingress_annotation}

---

##### `NginxAnnotationPrefix`<sup>Optional</sup> <a name="NginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.nginxAnnotationPrefix"></a>

```go
NginxAnnotationPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}.

---

### OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation <a name="OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation {
	CanaryByHeader: *string,
	Key1: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.canaryByHeader">CanaryByHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.key1">Key1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}. |

---

##### `CanaryByHeader`<sup>Optional</sup> <a name="CanaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.canaryByHeader"></a>

```go
CanaryByHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}.

---

##### `Key1`<sup>Optional</sup> <a name="Key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.key1"></a>

```go
Key1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}.

---

### OceancdRolloutSpecTrafficPingPong <a name="OceancdRolloutSpecTrafficPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficPingPong {
	PingService: *string,
	PongService: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pingService">PingService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pongService">PongService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}. |

---

##### `PingService`<sup>Required</sup> <a name="PingService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pingService"></a>

```go
PingService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}.

---

##### `PongService`<sup>Required</sup> <a name="PongService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pongService"></a>

```go
PongService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}.

---

### OceancdRolloutSpecTrafficSmi <a name="OceancdRolloutSpecTrafficSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

&oceancdrolloutspec.OceancdRolloutSpecTrafficSmi {
	SmiRootService: *string,
	TrafficSplitName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.smiRootService">SmiRootService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.trafficSplitName">TrafficSplitName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}. |

---

##### `SmiRootService`<sup>Optional</sup> <a name="SmiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.smiRootService"></a>

```go
SmiRootService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}.

---

##### `TrafficSplitName`<sup>Optional</sup> <a name="TrafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.trafficSplitName"></a>

```go
TrafficSplitName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdRolloutSpecFailurePolicyOutputReference <a name="OceancdRolloutSpecFailurePolicyOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecFailurePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecFailurePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---


### OceancdRolloutSpecSpotDeploymentOutputReference <a name="OceancdRolloutSpecSpotDeploymentOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecSpotDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecSpotDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentClusterId">ResetSpotDeploymentClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentName">ResetSpotDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentNamespace">ResetSpotDeploymentNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpotDeploymentClusterId` <a name="ResetSpotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentClusterId"></a>

```go
func ResetSpotDeploymentClusterId()
```

##### `ResetSpotDeploymentName` <a name="ResetSpotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentName"></a>

```go
func ResetSpotDeploymentName()
```

##### `ResetSpotDeploymentNamespace` <a name="ResetSpotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentNamespace"></a>

```go
func ResetSpotDeploymentNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterIdInput">SpotDeploymentClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNameInput">SpotDeploymentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespaceInput">SpotDeploymentNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterId">SpotDeploymentClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentName">SpotDeploymentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespace">SpotDeploymentNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpotDeploymentClusterIdInput`<sup>Optional</sup> <a name="SpotDeploymentClusterIdInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterIdInput"></a>

```go
func SpotDeploymentClusterIdInput() *string
```

- *Type:* *string

---

##### `SpotDeploymentNameInput`<sup>Optional</sup> <a name="SpotDeploymentNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNameInput"></a>

```go
func SpotDeploymentNameInput() *string
```

- *Type:* *string

---

##### `SpotDeploymentNamespaceInput`<sup>Optional</sup> <a name="SpotDeploymentNamespaceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespaceInput"></a>

```go
func SpotDeploymentNamespaceInput() *string
```

- *Type:* *string

---

##### `SpotDeploymentClusterId`<sup>Required</sup> <a name="SpotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterId"></a>

```go
func SpotDeploymentClusterId() *string
```

- *Type:* *string

---

##### `SpotDeploymentName`<sup>Required</sup> <a name="SpotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentName"></a>

```go
func SpotDeploymentName() *string
```

- *Type:* *string

---

##### `SpotDeploymentNamespace`<sup>Required</sup> <a name="SpotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespace"></a>

```go
func SpotDeploymentNamespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecSpotDeployment
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---


### OceancdRolloutSpecSpotDeploymentsList <a name="OceancdRolloutSpecSpotDeploymentsList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecSpotDeploymentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdRolloutSpecSpotDeploymentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get"></a>

```go
func Get(index *f64) OceancdRolloutSpecSpotDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdRolloutSpecSpotDeploymentsOutputReference <a name="OceancdRolloutSpecSpotDeploymentsOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecSpotDeploymentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdRolloutSpecSpotDeploymentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsClusterId">ResetSpotDeploymentsClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsName">ResetSpotDeploymentsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsNamespace">ResetSpotDeploymentsNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpotDeploymentsClusterId` <a name="ResetSpotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsClusterId"></a>

```go
func ResetSpotDeploymentsClusterId()
```

##### `ResetSpotDeploymentsName` <a name="ResetSpotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsName"></a>

```go
func ResetSpotDeploymentsName()
```

##### `ResetSpotDeploymentsNamespace` <a name="ResetSpotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsNamespace"></a>

```go
func ResetSpotDeploymentsNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterIdInput">SpotDeploymentsClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNameInput">SpotDeploymentsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespaceInput">SpotDeploymentsNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterId">SpotDeploymentsClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsName">SpotDeploymentsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespace">SpotDeploymentsNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpotDeploymentsClusterIdInput`<sup>Optional</sup> <a name="SpotDeploymentsClusterIdInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterIdInput"></a>

```go
func SpotDeploymentsClusterIdInput() *string
```

- *Type:* *string

---

##### `SpotDeploymentsNameInput`<sup>Optional</sup> <a name="SpotDeploymentsNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNameInput"></a>

```go
func SpotDeploymentsNameInput() *string
```

- *Type:* *string

---

##### `SpotDeploymentsNamespaceInput`<sup>Optional</sup> <a name="SpotDeploymentsNamespaceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespaceInput"></a>

```go
func SpotDeploymentsNamespaceInput() *string
```

- *Type:* *string

---

##### `SpotDeploymentsClusterId`<sup>Required</sup> <a name="SpotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterId"></a>

```go
func SpotDeploymentsClusterId() *string
```

- *Type:* *string

---

##### `SpotDeploymentsName`<sup>Required</sup> <a name="SpotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsName"></a>

```go
func SpotDeploymentsName() *string
```

- *Type:* *string

---

##### `SpotDeploymentsNamespace`<sup>Required</sup> <a name="SpotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespace"></a>

```go
func SpotDeploymentsNamespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdRolloutSpecStrategyArgsList <a name="OceancdRolloutSpecStrategyArgsList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecStrategyArgsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdRolloutSpecStrategyArgsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get"></a>

```go
func Get(index *f64) OceancdRolloutSpecStrategyArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdRolloutSpecStrategyArgsOutputReference <a name="OceancdRolloutSpecStrategyArgsOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecStrategyArgsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdRolloutSpecStrategyArgsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom">PutValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetArgValue">ResetArgValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueFrom` <a name="PutValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom"></a>

```go
func PutValueFrom(value OceancdRolloutSpecStrategyArgsValueFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---

##### `ResetArgValue` <a name="ResetArgValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetArgValue"></a>

```go
func ResetArgValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetValueFrom"></a>

```go
func ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference">OceancdRolloutSpecStrategyArgsValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argNameInput">ArgNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValueInput">ArgValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argName">ArgName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValue">ArgValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFrom"></a>

```go
func ValueFrom() OceancdRolloutSpecStrategyArgsValueFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference">OceancdRolloutSpecStrategyArgsValueFromOutputReference</a>

---

##### `ArgNameInput`<sup>Optional</sup> <a name="ArgNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argNameInput"></a>

```go
func ArgNameInput() *string
```

- *Type:* *string

---

##### `ArgValueInput`<sup>Optional</sup> <a name="ArgValueInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValueInput"></a>

```go
func ArgValueInput() *string
```

- *Type:* *string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFromInput"></a>

```go
func ValueFromInput() OceancdRolloutSpecStrategyArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---

##### `ArgName`<sup>Required</sup> <a name="ArgName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argName"></a>

```go
func ArgName() *string
```

- *Type:* *string

---

##### `ArgValue`<sup>Required</sup> <a name="ArgValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValue"></a>

```go
func ArgValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference <a name="OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecStrategyArgsValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---


### OceancdRolloutSpecStrategyArgsValueFromOutputReference <a name="OceancdRolloutSpecStrategyArgsValueFromOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecStrategyArgsValueFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecStrategyArgsValueFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef">PutFieldRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldRef` <a name="PutFieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef"></a>

```go
func PutFieldRef(value OceancdRolloutSpecStrategyArgsValueFromFieldRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRef">FieldRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference">OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRefInput">FieldRefInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldRef`<sup>Required</sup> <a name="FieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRef"></a>

```go
func FieldRef() OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference">OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference</a>

---

##### `FieldRefInput`<sup>Optional</sup> <a name="FieldRefInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRefInput"></a>

```go
func FieldRefInput() OceancdRolloutSpecStrategyArgsValueFromFieldRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecStrategyArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---


### OceancdRolloutSpecStrategyOutputReference <a name="OceancdRolloutSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs">PutArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArgs` <a name="PutArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs"></a>

```go
func PutArgs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resetArgs"></a>

```go
func ResetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.args">Args</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList">OceancdRolloutSpecStrategyArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.argsInput">ArgsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyNameInput">StrategyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyName">StrategyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.args"></a>

```go
func Args() OceancdRolloutSpecStrategyArgsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList">OceancdRolloutSpecStrategyArgsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.argsInput"></a>

```go
func ArgsInput() interface{}
```

- *Type:* interface{}

---

##### `StrategyNameInput`<sup>Optional</sup> <a name="StrategyNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyNameInput"></a>

```go
func StrategyNameInput() *string
```

- *Type:* *string

---

##### `StrategyName`<sup>Required</sup> <a name="StrategyName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyName"></a>

```go
func StrategyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecStrategy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---


### OceancdRolloutSpecTrafficAlbOutputReference <a name="OceancdRolloutSpecTrafficAlbOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficAlbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficAlbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig">PutStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetAlbAnnotationPrefix">ResetAlbAnnotationPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetStickinessConfig">ResetStickinessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStickinessConfig` <a name="PutStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig"></a>

```go
func PutStickinessConfig(value OceancdRolloutSpecTrafficAlbStickinessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---

##### `ResetAlbAnnotationPrefix` <a name="ResetAlbAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetAlbAnnotationPrefix"></a>

```go
func ResetAlbAnnotationPrefix()
```

##### `ResetStickinessConfig` <a name="ResetStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetStickinessConfig"></a>

```go
func ResetStickinessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfig">StickinessConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference">OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefixInput">AlbAnnotationPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngressInput">AlbIngressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootServiceInput">AlbRootServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePortInput">ServicePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfigInput">StickinessConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefix">AlbAnnotationPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngress">AlbIngress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootService">AlbRootService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePort">ServicePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StickinessConfig`<sup>Required</sup> <a name="StickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfig"></a>

```go
func StickinessConfig() OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference">OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference</a>

---

##### `AlbAnnotationPrefixInput`<sup>Optional</sup> <a name="AlbAnnotationPrefixInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefixInput"></a>

```go
func AlbAnnotationPrefixInput() *string
```

- *Type:* *string

---

##### `AlbIngressInput`<sup>Optional</sup> <a name="AlbIngressInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngressInput"></a>

```go
func AlbIngressInput() *string
```

- *Type:* *string

---

##### `AlbRootServiceInput`<sup>Optional</sup> <a name="AlbRootServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootServiceInput"></a>

```go
func AlbRootServiceInput() *string
```

- *Type:* *string

---

##### `ServicePortInput`<sup>Optional</sup> <a name="ServicePortInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePortInput"></a>

```go
func ServicePortInput() *f64
```

- *Type:* *f64

---

##### `StickinessConfigInput`<sup>Optional</sup> <a name="StickinessConfigInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfigInput"></a>

```go
func StickinessConfigInput() OceancdRolloutSpecTrafficAlbStickinessConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---

##### `AlbAnnotationPrefix`<sup>Required</sup> <a name="AlbAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefix"></a>

```go
func AlbAnnotationPrefix() *string
```

- *Type:* *string

---

##### `AlbIngress`<sup>Required</sup> <a name="AlbIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngress"></a>

```go
func AlbIngress() *string
```

- *Type:* *string

---

##### `AlbRootService`<sup>Required</sup> <a name="AlbRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootService"></a>

```go
func AlbRootService() *string
```

- *Type:* *string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePort"></a>

```go
func ServicePort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficAlb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---


### OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference <a name="OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficAlbStickinessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetDurationSeconds">ResetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationSeconds` <a name="ResetDurationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetDurationSeconds"></a>

```go
func ResetDurationSeconds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSecondsInput">DurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationSecondsInput`<sup>Optional</sup> <a name="DurationSecondsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSecondsInput"></a>

```go
func DurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSeconds"></a>

```go
func DurationSeconds() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficAlbStickinessConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---


### OceancdRolloutSpecTrafficAmbassadorOutputReference <a name="OceancdRolloutSpecTrafficAmbassadorOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficAmbassadorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficAmbassadorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappingsInput">MappingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappings">Mappings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MappingsInput`<sup>Optional</sup> <a name="MappingsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappingsInput"></a>

```go
func MappingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Mappings`<sup>Required</sup> <a name="Mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappings"></a>

```go
func Mappings() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficAmbassador
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---


### OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference <a name="OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficIstioDestinationRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetNameInput">CanarySubsetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleNameInput">DestinationRuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetNameInput">StableSubsetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetName">CanarySubsetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleName">DestinationRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetName">StableSubsetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanarySubsetNameInput`<sup>Optional</sup> <a name="CanarySubsetNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetNameInput"></a>

```go
func CanarySubsetNameInput() *string
```

- *Type:* *string

---

##### `DestinationRuleNameInput`<sup>Optional</sup> <a name="DestinationRuleNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleNameInput"></a>

```go
func DestinationRuleNameInput() *string
```

- *Type:* *string

---

##### `StableSubsetNameInput`<sup>Optional</sup> <a name="StableSubsetNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetNameInput"></a>

```go
func StableSubsetNameInput() *string
```

- *Type:* *string

---

##### `CanarySubsetName`<sup>Required</sup> <a name="CanarySubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetName"></a>

```go
func CanarySubsetName() *string
```

- *Type:* *string

---

##### `DestinationRuleName`<sup>Required</sup> <a name="DestinationRuleName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleName"></a>

```go
func DestinationRuleName() *string
```

- *Type:* *string

---

##### `StableSubsetName`<sup>Required</sup> <a name="StableSubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetName"></a>

```go
func StableSubsetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficIstioDestinationRule
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---


### OceancdRolloutSpecTrafficIstioOutputReference <a name="OceancdRolloutSpecTrafficIstioOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficIstioOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficIstioOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule">PutDestinationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices">PutVirtualServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resetDestinationRule">ResetDestinationRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationRule` <a name="PutDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule"></a>

```go
func PutDestinationRule(value OceancdRolloutSpecTrafficIstioDestinationRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---

##### `PutVirtualServices` <a name="PutVirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices"></a>

```go
func PutVirtualServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinationRule` <a name="ResetDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resetDestinationRule"></a>

```go
func ResetDestinationRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRule">DestinationRule</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference">OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServices">VirtualServices</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList">OceancdRolloutSpecTrafficIstioVirtualServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRuleInput">DestinationRuleInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServicesInput">VirtualServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationRule`<sup>Required</sup> <a name="DestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRule"></a>

```go
func DestinationRule() OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference">OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference</a>

---

##### `VirtualServices`<sup>Required</sup> <a name="VirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServices"></a>

```go
func VirtualServices() OceancdRolloutSpecTrafficIstioVirtualServicesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList">OceancdRolloutSpecTrafficIstioVirtualServicesList</a>

---

##### `DestinationRuleInput`<sup>Optional</sup> <a name="DestinationRuleInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRuleInput"></a>

```go
func DestinationRuleInput() OceancdRolloutSpecTrafficIstioDestinationRule
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---

##### `VirtualServicesInput`<sup>Optional</sup> <a name="VirtualServicesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServicesInput"></a>

```go
func VirtualServicesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficIstio
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---


### OceancdRolloutSpecTrafficIstioVirtualServicesList <a name="OceancdRolloutSpecTrafficIstioVirtualServicesList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficIstioVirtualServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdRolloutSpecTrafficIstioVirtualServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get"></a>

```go
func Get(index *f64) OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference <a name="OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficIstioVirtualServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes">PutTlsRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetTlsRoutes">ResetTlsRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetVirtualServiceRoutes">ResetVirtualServiceRoutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTlsRoutes` <a name="PutTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes"></a>

```go
func PutTlsRoutes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTlsRoutes` <a name="ResetTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetTlsRoutes"></a>

```go
func ResetTlsRoutes()
```

##### `ResetVirtualServiceRoutes` <a name="ResetVirtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetVirtualServiceRoutes"></a>

```go
func ResetVirtualServiceRoutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutes">TlsRoutes</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutesInput">TlsRoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceNameInput">VirtualServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutesInput">VirtualServiceRoutesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceName">VirtualServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutes">VirtualServiceRoutes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TlsRoutes`<sup>Required</sup> <a name="TlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutes"></a>

```go
func TlsRoutes() OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList</a>

---

##### `TlsRoutesInput`<sup>Optional</sup> <a name="TlsRoutesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutesInput"></a>

```go
func TlsRoutesInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualServiceNameInput`<sup>Optional</sup> <a name="VirtualServiceNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceNameInput"></a>

```go
func VirtualServiceNameInput() *string
```

- *Type:* *string

---

##### `VirtualServiceRoutesInput`<sup>Optional</sup> <a name="VirtualServiceRoutesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutesInput"></a>

```go
func VirtualServiceRoutesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualServiceName`<sup>Required</sup> <a name="VirtualServiceName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceName"></a>

```go
func VirtualServiceName() *string
```

- *Type:* *string

---

##### `VirtualServiceRoutes`<sup>Required</sup> <a name="VirtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutes"></a>

```go
func VirtualServiceRoutes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get"></a>

```go
func Get(index *f64) OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetSniHosts">ResetSniHosts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSniHosts` <a name="ResetSniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetSniHosts"></a>

```go
func ResetSniHosts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHostsInput">SniHostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHosts">SniHosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SniHostsInput`<sup>Optional</sup> <a name="SniHostsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHostsInput"></a>

```go
func SniHostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SniHosts`<sup>Required</sup> <a name="SniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHosts"></a>

```go
func SniHosts() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference <a name="OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetCanaryByHeader">ResetCanaryByHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetKey1">ResetKey1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCanaryByHeader` <a name="ResetCanaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetCanaryByHeader"></a>

```go
func ResetCanaryByHeader()
```

##### `ResetKey1` <a name="ResetKey1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetKey1"></a>

```go
func ResetKey1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeaderInput">CanaryByHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1Input">Key1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeader">CanaryByHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1">Key1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanaryByHeaderInput`<sup>Optional</sup> <a name="CanaryByHeaderInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeaderInput"></a>

```go
func CanaryByHeaderInput() *string
```

- *Type:* *string

---

##### `Key1Input`<sup>Optional</sup> <a name="Key1Input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1Input"></a>

```go
func Key1Input() *string
```

- *Type:* *string

---

##### `CanaryByHeader`<sup>Required</sup> <a name="CanaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeader"></a>

```go
func CanaryByHeader() *string
```

- *Type:* *string

---

##### `Key1`<sup>Required</sup> <a name="Key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1"></a>

```go
func Key1() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---


### OceancdRolloutSpecTrafficNginxOutputReference <a name="OceancdRolloutSpecTrafficNginxOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficNginxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficNginxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation">PutAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetAdditionalIngressAnnotation">ResetAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetNginxAnnotationPrefix">ResetNginxAnnotationPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalIngressAnnotation` <a name="PutAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation"></a>

```go
func PutAdditionalIngressAnnotation(value OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---

##### `ResetAdditionalIngressAnnotation` <a name="ResetAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetAdditionalIngressAnnotation"></a>

```go
func ResetAdditionalIngressAnnotation()
```

##### `ResetNginxAnnotationPrefix` <a name="ResetNginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetNginxAnnotationPrefix"></a>

```go
func ResetNginxAnnotationPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotation">AdditionalIngressAnnotation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotationInput">AdditionalIngressAnnotationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefixInput">NginxAnnotationPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngressInput">StableIngressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefix">NginxAnnotationPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngress">StableIngress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalIngressAnnotation`<sup>Required</sup> <a name="AdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotation"></a>

```go
func AdditionalIngressAnnotation() OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference</a>

---

##### `AdditionalIngressAnnotationInput`<sup>Optional</sup> <a name="AdditionalIngressAnnotationInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotationInput"></a>

```go
func AdditionalIngressAnnotationInput() OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---

##### `NginxAnnotationPrefixInput`<sup>Optional</sup> <a name="NginxAnnotationPrefixInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefixInput"></a>

```go
func NginxAnnotationPrefixInput() *string
```

- *Type:* *string

---

##### `StableIngressInput`<sup>Optional</sup> <a name="StableIngressInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngressInput"></a>

```go
func StableIngressInput() *string
```

- *Type:* *string

---

##### `NginxAnnotationPrefix`<sup>Required</sup> <a name="NginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefix"></a>

```go
func NginxAnnotationPrefix() *string
```

- *Type:* *string

---

##### `StableIngress`<sup>Required</sup> <a name="StableIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngress"></a>

```go
func StableIngress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficNginx
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---


### OceancdRolloutSpecTrafficOutputReference <a name="OceancdRolloutSpecTrafficOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb">PutAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador">PutAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio">PutIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx">PutNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong">PutPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi">PutSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAlb">ResetAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAmbassador">ResetAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetCanaryService">ResetCanaryService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetIstio">ResetIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetNginx">ResetNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetPingPong">ResetPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetSmi">ResetSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetStableService">ResetStableService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlb` <a name="PutAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb"></a>

```go
func PutAlb(value OceancdRolloutSpecTrafficAlb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---

##### `PutAmbassador` <a name="PutAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador"></a>

```go
func PutAmbassador(value OceancdRolloutSpecTrafficAmbassador)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---

##### `PutIstio` <a name="PutIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio"></a>

```go
func PutIstio(value OceancdRolloutSpecTrafficIstio)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---

##### `PutNginx` <a name="PutNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx"></a>

```go
func PutNginx(value OceancdRolloutSpecTrafficNginx)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---

##### `PutPingPong` <a name="PutPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong"></a>

```go
func PutPingPong(value OceancdRolloutSpecTrafficPingPong)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---

##### `PutSmi` <a name="PutSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi"></a>

```go
func PutSmi(value OceancdRolloutSpecTrafficSmi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---

##### `ResetAlb` <a name="ResetAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAlb"></a>

```go
func ResetAlb()
```

##### `ResetAmbassador` <a name="ResetAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAmbassador"></a>

```go
func ResetAmbassador()
```

##### `ResetCanaryService` <a name="ResetCanaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetCanaryService"></a>

```go
func ResetCanaryService()
```

##### `ResetIstio` <a name="ResetIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetIstio"></a>

```go
func ResetIstio()
```

##### `ResetNginx` <a name="ResetNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetNginx"></a>

```go
func ResetNginx()
```

##### `ResetPingPong` <a name="ResetPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetPingPong"></a>

```go
func ResetPingPong()
```

##### `ResetSmi` <a name="ResetSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetSmi"></a>

```go
func ResetSmi()
```

##### `ResetStableService` <a name="ResetStableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetStableService"></a>

```go
func ResetStableService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.alb">Alb</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference">OceancdRolloutSpecTrafficAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassador">Ambassador</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference">OceancdRolloutSpecTrafficAmbassadorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istio">Istio</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference">OceancdRolloutSpecTrafficIstioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginx">Nginx</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference">OceancdRolloutSpecTrafficNginxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPong">PingPong</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference">OceancdRolloutSpecTrafficPingPongOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smi">Smi</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference">OceancdRolloutSpecTrafficSmiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.albInput">AlbInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassadorInput">AmbassadorInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryServiceInput">CanaryServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istioInput">IstioInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginxInput">NginxInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPongInput">PingPongInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smiInput">SmiInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableServiceInput">StableServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryService">CanaryService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableService">StableService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alb`<sup>Required</sup> <a name="Alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.alb"></a>

```go
func Alb() OceancdRolloutSpecTrafficAlbOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference">OceancdRolloutSpecTrafficAlbOutputReference</a>

---

##### `Ambassador`<sup>Required</sup> <a name="Ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassador"></a>

```go
func Ambassador() OceancdRolloutSpecTrafficAmbassadorOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference">OceancdRolloutSpecTrafficAmbassadorOutputReference</a>

---

##### `Istio`<sup>Required</sup> <a name="Istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istio"></a>

```go
func Istio() OceancdRolloutSpecTrafficIstioOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference">OceancdRolloutSpecTrafficIstioOutputReference</a>

---

##### `Nginx`<sup>Required</sup> <a name="Nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginx"></a>

```go
func Nginx() OceancdRolloutSpecTrafficNginxOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference">OceancdRolloutSpecTrafficNginxOutputReference</a>

---

##### `PingPong`<sup>Required</sup> <a name="PingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPong"></a>

```go
func PingPong() OceancdRolloutSpecTrafficPingPongOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference">OceancdRolloutSpecTrafficPingPongOutputReference</a>

---

##### `Smi`<sup>Required</sup> <a name="Smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smi"></a>

```go
func Smi() OceancdRolloutSpecTrafficSmiOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference">OceancdRolloutSpecTrafficSmiOutputReference</a>

---

##### `AlbInput`<sup>Optional</sup> <a name="AlbInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.albInput"></a>

```go
func AlbInput() OceancdRolloutSpecTrafficAlb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---

##### `AmbassadorInput`<sup>Optional</sup> <a name="AmbassadorInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassadorInput"></a>

```go
func AmbassadorInput() OceancdRolloutSpecTrafficAmbassador
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---

##### `CanaryServiceInput`<sup>Optional</sup> <a name="CanaryServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryServiceInput"></a>

```go
func CanaryServiceInput() *string
```

- *Type:* *string

---

##### `IstioInput`<sup>Optional</sup> <a name="IstioInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istioInput"></a>

```go
func IstioInput() OceancdRolloutSpecTrafficIstio
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---

##### `NginxInput`<sup>Optional</sup> <a name="NginxInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginxInput"></a>

```go
func NginxInput() OceancdRolloutSpecTrafficNginx
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---

##### `PingPongInput`<sup>Optional</sup> <a name="PingPongInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPongInput"></a>

```go
func PingPongInput() OceancdRolloutSpecTrafficPingPong
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---

##### `SmiInput`<sup>Optional</sup> <a name="SmiInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smiInput"></a>

```go
func SmiInput() OceancdRolloutSpecTrafficSmi
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---

##### `StableServiceInput`<sup>Optional</sup> <a name="StableServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableServiceInput"></a>

```go
func StableServiceInput() *string
```

- *Type:* *string

---

##### `CanaryService`<sup>Required</sup> <a name="CanaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryService"></a>

```go
func CanaryService() *string
```

- *Type:* *string

---

##### `StableService`<sup>Required</sup> <a name="StableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableService"></a>

```go
func StableService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTraffic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---


### OceancdRolloutSpecTrafficPingPongOutputReference <a name="OceancdRolloutSpecTrafficPingPongOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficPingPongOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficPingPongOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingServiceInput">PingServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongServiceInput">PongServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingService">PingService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongService">PongService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PingServiceInput`<sup>Optional</sup> <a name="PingServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingServiceInput"></a>

```go
func PingServiceInput() *string
```

- *Type:* *string

---

##### `PongServiceInput`<sup>Optional</sup> <a name="PongServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongServiceInput"></a>

```go
func PongServiceInput() *string
```

- *Type:* *string

---

##### `PingService`<sup>Required</sup> <a name="PingService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingService"></a>

```go
func PingService() *string
```

- *Type:* *string

---

##### `PongService`<sup>Required</sup> <a name="PongService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongService"></a>

```go
func PongService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficPingPong
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---


### OceancdRolloutSpecTrafficSmiOutputReference <a name="OceancdRolloutSpecTrafficSmiOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v13/oceancdrolloutspec"

oceancdrolloutspec.NewOceancdRolloutSpecTrafficSmiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdRolloutSpecTrafficSmiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetSmiRootService">ResetSmiRootService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetTrafficSplitName">ResetTrafficSplitName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSmiRootService` <a name="ResetSmiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetSmiRootService"></a>

```go
func ResetSmiRootService()
```

##### `ResetTrafficSplitName` <a name="ResetTrafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetTrafficSplitName"></a>

```go
func ResetTrafficSplitName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootServiceInput">SmiRootServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitNameInput">TrafficSplitNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootService">SmiRootService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitName">TrafficSplitName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SmiRootServiceInput`<sup>Optional</sup> <a name="SmiRootServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootServiceInput"></a>

```go
func SmiRootServiceInput() *string
```

- *Type:* *string

---

##### `TrafficSplitNameInput`<sup>Optional</sup> <a name="TrafficSplitNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitNameInput"></a>

```go
func TrafficSplitNameInput() *string
```

- *Type:* *string

---

##### `SmiRootService`<sup>Required</sup> <a name="SmiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootService"></a>

```go
func SmiRootService() *string
```

- *Type:* *string

---

##### `TrafficSplitName`<sup>Required</sup> <a name="TrafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitName"></a>

```go
func TrafficSplitName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdRolloutSpecTrafficSmi
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---



