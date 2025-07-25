# `oceanGkeLaunchSpecImport` Submodule <a name="`oceanGkeLaunchSpecImport` Submodule" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanGkeLaunchSpecImport <a name="OceanGkeLaunchSpecImport" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_gke_launch_spec_import spotinst_ocean_gke_launch_spec_import}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceangkelaunchspecimport"

oceangkelaunchspecimport.NewOceanGkeLaunchSpecImport(scope Construct, id *string, config OceanGkeLaunchSpecImportConfig) OceanGkeLaunchSpecImport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig">OceanGkeLaunchSpecImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig">OceanGkeLaunchSpecImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanGkeLaunchSpecImport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceangkelaunchspecimport"

oceangkelaunchspecimport.OceanGkeLaunchSpecImport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceangkelaunchspecimport"

oceangkelaunchspecimport.OceanGkeLaunchSpecImport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceangkelaunchspecimport"

oceangkelaunchspecimport.OceanGkeLaunchSpecImport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceangkelaunchspecimport"

oceangkelaunchspecimport.OceanGkeLaunchSpecImport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceanGkeLaunchSpecImport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceanGkeLaunchSpecImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceanGkeLaunchSpecImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_gke_launch_spec_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceanGkeLaunchSpecImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.nodePoolNameInput">NodePoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.oceanIdInput">OceanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.nodePoolName">NodePoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.oceanId">OceanId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NodePoolNameInput`<sup>Optional</sup> <a name="NodePoolNameInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.nodePoolNameInput"></a>

```go
func NodePoolNameInput() *string
```

- *Type:* *string

---

##### `OceanIdInput`<sup>Optional</sup> <a name="OceanIdInput" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.oceanIdInput"></a>

```go
func OceanIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NodePoolName`<sup>Required</sup> <a name="NodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.nodePoolName"></a>

```go
func NodePoolName() *string
```

- *Type:* *string

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.oceanId"></a>

```go
func OceanId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanGkeLaunchSpecImportConfig <a name="OceanGkeLaunchSpecImportConfig" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/v14/oceangkelaunchspecimport"

&oceangkelaunchspecimport.OceanGkeLaunchSpecImportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NodePoolName: *string,
	OceanId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.nodePoolName">NodePoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_gke_launch_spec_import#node_pool_name OceanGkeLaunchSpecImport#node_pool_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.oceanId">OceanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_gke_launch_spec_import#ocean_id OceanGkeLaunchSpecImport#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_gke_launch_spec_import#id OceanGkeLaunchSpecImport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NodePoolName`<sup>Required</sup> <a name="NodePoolName" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.nodePoolName"></a>

```go
NodePoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_gke_launch_spec_import#node_pool_name OceanGkeLaunchSpecImport#node_pool_name}.

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.oceanId"></a>

```go
OceanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_gke_launch_spec_import#ocean_id OceanGkeLaunchSpecImport#ocean_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanGkeLaunchSpecImport.OceanGkeLaunchSpecImportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/ocean_gke_launch_spec_import#id OceanGkeLaunchSpecImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



